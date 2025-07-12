"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSimulator = runSimulator;
exports.startSimulator = startSimulator;
const axios_1 = __importDefault(require("axios"));
const API_URL = process.env.SCRIPTING_API || "http://localhost:5000/api/footfall/sensor-data";
const SENSOR_IDS = ["SENSOR-001", "SENSOR-002"];
const LOCATIONS = ["Main Entrance", "Side Entrance"];
function generateRandomFootfall() {
    return Math.floor(Math.random() * 50) + 1;
}
async function sendSensorData(sensor_id, location) {
    const payload = {
        sensor_id,
        timestamp: new Date().toISOString(),
        count: generateRandomFootfall(),
        location: location
    };
    try {
        await axios_1.default.post(API_URL, payload);
        console.log(`Simulator sent data for ${sensor_id}`);
    }
    catch (error) {
        console.error(`Simulator failed for ${sensor_id}:`, error.response?.data || error.message);
    }
}
async function runSimulator() {
    for (let i = 0; i < SENSOR_IDS.length; i++) {
        await sendSensorData(SENSOR_IDS[i], LOCATIONS[i]);
    }
}
function startSimulator() {
    runSimulator();
    setInterval(runSimulator, 60 * 60 * 1000);
}
