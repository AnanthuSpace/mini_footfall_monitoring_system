import axios from "axios";

const API_URL = process.env.SCRIPTING_API || "http://localhost:5000/api/footfall/sensor-data";
const SENSOR_IDS = ["SENSOR-001", "SENSOR-002"];
const LOCATIONS = ["Main Entrance", "Side Entrance"];

function generateRandomFootfall() {
    return Math.floor(Math.random() * 50) + 1;
}

async function sendSensorData(sensor_id: string, location: string) {
    const payload = {
        sensor_id,
        timestamp: new Date().toISOString(),
        count: generateRandomFootfall(),
        location: location
    };

    try {
        await axios.post(API_URL, payload);
        console.log(`Simulator sent data for ${sensor_id}`);
    } catch (error: any) {
        console.error(`Simulator failed for ${sensor_id}:`, error.response?.data || error.message);
    }
}

export async function runSimulator() {
    for (let i = 0; i < SENSOR_IDS.length; i++) {
        await sendSensorData(SENSOR_IDS[i], LOCATIONS[i]);
    }
}
export function startSimulator() {
    runSimulator();

    setInterval(runSimulator, 60 * 60 * 1000);
}
