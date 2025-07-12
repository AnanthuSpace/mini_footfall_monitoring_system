import { Request, Response } from "express";
import {
  saveSensorData,
  getFootfallAnalytics,
  getAllDevices,
} from "../services/sensor.service";


export const postSensorData = async (req: Request, res: Response) => {
  try {
    const { sensor_id, timestamp, count, location } = req.body;

    if (!sensor_id || !timestamp || typeof count !== "number") {
      return res.status(400).json({ message: "Invalid payload" });
    }

    const data = await saveSensorData(sensor_id, new Date(timestamp), count, location);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const range = req.query.range === "day" ? "day" : "hour";
    const result = await getFootfallAnalytics(range);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get analytics" });
  }
};

export const getDevices = async (_req: Request, res: Response) => {
  try {
    const result = await getAllDevices();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get devices" });
  }
};
