"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sensor_controller_1 = require("../controllers/sensor.controller");
const router = express_1.default.Router();
router.post("/sensor-data", sensor_controller_1.postSensorData);
router.get("/analytics", sensor_controller_1.getAnalytics);
router.get("/devices", sensor_controller_1.getDevices);
exports.default = router;
