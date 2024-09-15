import mongoose from 'mongoose';

export const DeviceRSSISchema = new mongoose.Schema({
    deviceId: Number,
    rssi: Number,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const getDeviceModel = async (deviceId) => {
    const collectionName = `device-${deviceId}`
    try {
        return await mongoose.model(collectionName)
    } catch (error) {
        console.log(error)
        return await mongoose.model(collectionName, DeviceRSSISchema, collectionName)
    }
}
