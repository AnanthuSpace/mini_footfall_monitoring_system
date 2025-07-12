import { fetchHourlyFootfall } from "@/api/footfallApi";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  Legend,
} from "recharts";
import { useEffect, useMemo, useState } from "react";
import type { DashboardProps, FootfallEntry } from "@/types";

export default function FootfallChartCard({ refresh }: DashboardProps) {
const [data, setData] = useState<FootfallEntry[]>([]);
  const [selectedSensor, setSelectedSensor] = useState("all");
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  useEffect(() => {
    fetchHourlyFootfall().then(setData);
  }, [refresh]);

  const filteredData = useMemo(() => {
    if (selectedSensor === "all") return data;
    return data.filter((entry) => entry.sensorId === selectedSensor);
  }, [selectedSensor, data]);

  return (
    <Card className="w-full rounded-lg border shadow-none">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b">
        <div className="grid gap-1 text-left">
          <CardTitle className="text-xl">Live Footfall (Past Hour)</CardTitle>
          <CardDescription>15-minute interval updates</CardDescription>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedSensor} onValueChange={setSelectedSensor}>
            <SelectTrigger className="h-8 w-40">
              <SelectValue placeholder="Select sensor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sensors</SelectItem>
              <SelectItem value="SENSOR-001">SENSOR-001</SelectItem>
              <SelectItem value="SENSOR-002">SENSOR-002</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={chartType}
            onValueChange={(val) => setChartType(val as "line" | "bar")}
          >
            <SelectTrigger className="h-8 w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="bar">Bar Chart</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="p-4 h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="totalCount"
                stroke="#3b82f6"
                strokeWidth={2}
                dot
              />
            </LineChart>
          ) : (
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalCount" fill="#3b82f6" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
