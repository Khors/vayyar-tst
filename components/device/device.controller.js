import { getDeviceModel } from './device.schema.js';
import { createRSSI } from './device.service.js';

export async function findAll(req, res) {
    console.log('findAll ');
    res.status(200).json({
        msg: "OK!"
    })
}

export async function addRSSI(req, res) {
    const deviceModel = await getDeviceModel(req.body.deviceId)
    const device = await createRSSI(deviceModel, req.body);
    res.status(201).json(device);
}


