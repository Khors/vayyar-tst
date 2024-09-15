import { Router, json } from 'express';
import * as controller from './device.controller.js';

const router = Router();

router.post('/', json(), controller.addRSSI);

export const DeviceRouter = router;