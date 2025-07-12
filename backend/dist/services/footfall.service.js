"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFootfallBySensor = getFootfallBySensor;
const mockData_1 = require("../data/mockData");
function getFootfallBySensor(sensorId) {
    if (!sensorId || sensorId === "all")
        return mockData_1.footfallData;
    return mockData_1.footfallData.filter((d) => d.sensorId === sensorId);
}
