"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const footfall_controller_1 = require("../controllers/footfall.controller");
const router = (0, express_1.Router)();
router.get("/", footfall_controller_1.getFootfallData);
exports.default = router;
