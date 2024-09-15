export const sendWarningMessage = (deviceId, rssi, status) => {
    console.log(`WARNING! ${deviceId} has average RSSI = ${rssi} and ets status ${status}`);
}