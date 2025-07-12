import express from "express";
import cors from "cors";
import sensorRoutes from "./routes/sensor.routes";
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/footfall", sensorRoutes);

export default app;
