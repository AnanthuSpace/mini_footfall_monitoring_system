"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SensorDataSchema = new mongoose_1.default.Schema({
    sensor_id: { type: String, required: true },
    timestamp: { type: Date, required: true },
    count: { type: Number, required: true },
    location: { type: String, required: true },
});
exports.default = mongoose_1.default.model("SensorData", SensorDataSchema);
