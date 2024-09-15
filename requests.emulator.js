import axios from 'axios';
import { deviceIds } from './mock-data/devices.mock.js';

function createRandomRSSIValue(deviceId) {
    const randomRSSI = -Math.floor(Math.random() * (90 - 10 + 1)) + 10
    return {
        deviceId: deviceId,
        rssi: (deviceId == 10) ? -90 : randomRSSI,
        createdAt: Date.now()
    };
}

async function sendDataToServer(devices) {
    for (let device of devices) {
        try {
            const result = await axios.post('http://localhost:8080/device', device);
        } catch (error) {
            console.log('err => ', error);
        }
    }
}

export default setInterval(() => {
    const devices = deviceIds.map(item => createRandomRSSIValue(item));
    sendDataToServer(devices);
}, 5000);