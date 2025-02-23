

import express from 'express';
import { DemoControllers } from '../controllers/apiController';

const router = express.Router();

router.route("/self").get(DemoControllers);

export default router;
