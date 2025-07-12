import type { Device, FootfallEntry } from "@/types";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const fetchAnalytics = async (range: "hour" | "day"): Promise<FootfallEntry[]> => {
    const response = await axios.get<FootfallEntry[]>(`${BASE_URL}/api/footfall/analytics?range=${range}`);
    return response.data;
};

export const fetchFootfallData = (): Promise<FootfallEntry[]> => fetchAnalytics("day");

export const fetchHourlyFootfall = (): Promise<FootfallEntry[]> => fetchAnalytics("hour");

export const fetchDevices = async (): Promise<Device[]> => {
  const response = await axios.get<Device[]>(`${BASE_URL}/api/footfall/devices`);
  return response.data;
};