import mongoose from "mongoose";

const SensorDataSchema = new mongoose.Schema({
  sensor_id: { type: String, required: true },
  timestamp: { type: Date, required: true },
  count: { type: Number, required: true },
  location: {type:String, required: true},
});

export default mongoose.model("SensorData", SensorDataSchema);
