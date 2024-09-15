import express from 'express';
import { DeviceRouter } from './components/device/device.router.js'

const SERVER_PORT = 8080;

const app = express();

app.use('/device', DeviceRouter);

export default app.listen(SERVER_PORT, () => {
    console.log(`server is working on  http://localhost:${SERVER_PORT}`)
});
