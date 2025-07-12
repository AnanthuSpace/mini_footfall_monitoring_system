"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFootfallData = void 0;
const footfall_service_1 = require("../services/footfall.service");
const getFootfallData = (req, res) => {
    const sensorId = req.query.sensorId;
    const data = (0, footfall_service_1.getFootfallBySensor)(sensorId);
    res.json(data);
};
exports.getFootfallData = getFootfallData;
