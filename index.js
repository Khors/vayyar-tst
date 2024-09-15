import runServer from './server.js'
import { DBConnect } from './config/db.client.js'
import { runDeviceWatcher } from './components/device/device.watcher.js'
import runEmulator from './requests.emulator.js'


const run = async () => {
    await DBConnect()
    runServer
    runEmulator
    runDeviceWatcher()
}

run();