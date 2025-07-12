export interface Device {
  sensor_id: string;
  location: string;
  status: "active" | "inactive";
  lastSeen: string;
  _id?: string; 
}

export interface DashboardProps {
  refresh: boolean;
}

export interface FootfallChartCardProps {
  refresh: boolean;
}

export interface FootfallEntry {
  _id: string; // timestamp string like "2025-07-12 09:00"
  totalCount: number;
  sensorId?: string; // optional if you're filtering by sensor
}