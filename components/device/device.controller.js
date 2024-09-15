import { getDeviceModel } from './device.schema.js';
import { createRSSI } from './device.service.js';

export async function findAll(req, res) {
    console.log('findAll ');
    res.status(200).json({
        msg: "OK!"
    })
}

export async function addRSSI(req, res) {
    // console.log('addRSSI', req.body)
    const deviceModel = getDeviceModel(req.body.deiceId)
    const device = await createRSSI(deviceModel, req.body);
    console.log(device)
    res.status(201).json(device);
}


