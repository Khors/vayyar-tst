import { getDeviceModel } from './device.schema.js';
import mongoose from 'mongoose';
import { getLast10 } from './device.service.js';
import { sendWarningMessage } from '../../messanger.js';
import { deviceIds } from '../../mock-data/devices.mock.js';

const DEVICE_STATUSES = {
    OFFLINE: 'OFFLINE',
    ONLINE: 'ONLINE'
}


const deviceWatcher = async (deviceId) => {
    const Model = await getDeviceModel(deviceId)

    const tracker = Model.watch()

    tracker.on('change', async (change) => {

        if (change.operationType !== 'insert') return

        const deviceState = await checkDeviceState(Model)
        console.log(deviceState, deviceId)
        if (deviceState.status == DEVICE_STATUSES.OFFLINE) {
            sendWarningMessage(deviceId, deviceState.rssi, deviceState.status)
        }

    });

    tracker.on('error', (err) => {
        console.log(err);
    });

    tracker.on('close', () => {
        console.log('FINISH');
    })
};

async function checkDeviceState(Model) {
    const last10rssi = await getLast10(Model)
    const sumValues = last10rssi.reduce((partialSum, item) => partialSum + item.rssi, 0)
    console.log('sumValues', sumValues)
    if (sumValues / 10 <= -90) return {
        rssi: sumValues / 10,
        status: DEVICE_STATUSES.OFFLINE
    }
    return {
        rssi: sumValues / 10,
        status: DEVICE_STATUSES.ONLINE
    }
}

export const runDeviceWatcher = () => {
    console.log(deviceIds)
    deviceIds.forEach(item => deviceWatcher(item))
}

