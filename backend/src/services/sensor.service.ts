import sensorSchema from "../models/sensor.schema";

export const saveSensorData = async (sensor_id: string, timestamp: Date, count: number, location: string) => {
  return await sensorSchema.create({ sensor_id, timestamp, count, location });
};

export const getFootfallAnalytics = async (range: "hour" | "day") => {
  const groupBy =
    range === "day"
      ? { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } }
      : { $dateToString: { format: "%Y-%m-%d %H:00", date: "$timestamp" } };

  return await sensorSchema.aggregate([
    {
      $group: {
        _id: groupBy,
        totalCount: { $sum: "$count" },
      },
    },
    { $sort: { _id: 1 } },
  ]);
};

export const getAllDevices = async () => {
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);

  return await sensorSchema.aggregate([
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
