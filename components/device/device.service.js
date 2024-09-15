
export const createRSSI = async (deviceModel, rssiData) => {
    const device = new deviceModel(rssiData)
    const newRSSI = await device.save(rssiData)
    return newRSSI
}

export const getLast10 = async (deviceModel) => {
    const last10 = await deviceModel.find()
        .sort({ timestamp: -1 })
        .limit(10)
    return last10
}