"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const simulator_script_1 = require("./sensore/simulator.script");
const db_1 = require("./utils/db");
const PORT = process.env.PORT || 5000;
(0, db_1.connectDB)().then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        (0, simulator_script_1.startSimulator)();
    });
});
