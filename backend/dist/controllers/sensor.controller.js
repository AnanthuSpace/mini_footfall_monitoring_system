"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevices = exports.getAnalytics = exports.postSensorData = void 0;
const sensor_service_1 = require("../services/sensor.service");
const postSensorData = async (req, res) => {
    try {
        const { sensor_id, timestamp, count, location } = req.body;
        if (!sensor_id || !timestamp || typeof count !== "number") {
            return res.status(400).json({ message: "Invalid payload" });
        }
        const data = await (0, sensor_service_1.saveSensorData)(sensor_id, new Date(timestamp), count, location);
        res.status(201).json(data);
    }
    catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
exports.postSensorData = postSensorData;
const getAnalytics = async (req, res) => {
    try {
        const range = req.query.range === "day" ? "day" : "hour";
        const result = await (0, sensor_service_1.getFootfallAnalytics)(range);
        res.json(result);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to get analytics" });
    }
};
exports.getAnalytics = getAnalytics;
const getDevices = async (_req, res) => {
    try {
        const result = await (0, sensor_service_1.getAllDevices)();
        res.json(result);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to get devices" });
    }
};
exports.getDevices = getDevices;
