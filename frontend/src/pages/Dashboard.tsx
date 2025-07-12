import SummaryCards from "@/components/SummaryCards";
import FootfallChartCard from "@/components/FootfallChartCard";
import TodaySummary from "@/components/TodaySummary";
import DeviceStatus from "@/components/DeviceStatus";
import SensorMap from "@/components/SensorMap";
import { useEffect, useState } from "react";
import { fetchDevices } from "@/api/footfallApi";
import type { DashboardProps, Device } from "@/types";

export default function Dashboard({ refresh }: DashboardProps) {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    fetchDevices().then(setDevices);
  }, [refresh]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <SummaryCards />
      <FootfallChartCard refresh={refresh} />
      <TodaySummary />
      <DeviceStatus devices={devices} />
      <SensorMap devices={devices} />
    </main>
  );
}
