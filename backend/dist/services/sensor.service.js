"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDevices = exports.getFootfallAnalytics = exports.saveSensorData = void 0;
const sensor_schema_1 = __importDefault(require("../models/sensor.schema"));
const saveSensorData = async (sensor_id, timestamp, count, location) => {
    return await sensor_schema_1.default.create({ sensor_id, timestamp, count, location });
};
exports.saveSensorData = saveSensorData;
const getFootfallAnalytics = async (range) => {
    const groupBy = range === "day"
        ? { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } }
        : { $dateToString: { format: "%Y-%m-%d %H:00", date: "$timestamp" } };
    return await sensor_schema_1.default.aggregate([
        {
            $group: {
                _id: groupBy,
                totalCount: { $sum: "$count" },
            },
        },
        { $sort: { _id: 1 } },
    ]);
};
exports.getFootfallAnalytics = getFootfallAnalytics;
const getAllDevices = async () => {
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
    return await sensor_schema_1.default.aggregate([
        { $sort: { timestamp: -1 } },
        {
            $group: {
                _id: "$sensor_id",
                lastSeen: { $first: "$timestamp" },
                location: { $first: "$location" },
            },
        },
        {
            $project: {
                sensor_id: "$_id",
                lastSeen: 1,
                status: {
                    $cond: [{ $gte: ["$lastSeen", twoHoursAgo] }, "active", "inactive"],
                },
            },
        },
    ]);
};
exports.getAllDevices = getAllDevices;
