import express from "express";
import {
    postSensorData,
    getAnalytics,
    getDevices,
} from "../controllers/sensor.controller";

const router = express.Router();

router.post("/sensor-data", postSensorData);
router.get("/analytics", getAnalytics);
router.get("/devices", getDevices);

export default router;
