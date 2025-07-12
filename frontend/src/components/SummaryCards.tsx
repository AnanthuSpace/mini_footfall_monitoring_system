import { fetchFootfallData, fetchDevices } from "@/api/footfallApi";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Activity, Clock, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function SummaryCards() {
  const [totalFootFall, setTotalFootFall] = useState<number>(0);
  const [activeSensors, setActiveSensors] = useState<number>(0);

  useEffect(() => {
    const fetchAll = async () => {
      const analytics = await fetchFootfallData();
      const devices = await fetchDevices();

      const today = new Date().toISOString().split("T")[0];
      const todayCount = analytics
        .filter((entry: any) => entry._id.startsWith(today))
        .reduce((sum: number, curr: any) => sum + curr.totalCount, 0);

      const activeCount = devices.filter((d: any) => d.status === "active").length;

      setTotalFootFall(todayCount);
      setActiveSensors(activeCount);
    };

    fetchAll();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardContent className="p-6 flex items-center">
          <Users className="h-8 w-8 text-blue-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Footfall Today</p>
            <p className="text-2xl font-bold">{totalFootFall}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex items-center">
          <Activity className="h-8 w-8 text-green-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Active Sensors</p>
            <p className="text-2xl font-bold">{activeSensors} / 4</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex items-center">
          <Clock className="h-8 w-8 text-purple-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Peak Hour</p>
            <p className="text-2xl font-bold">1:00 PM</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex items-center">
          <CheckCircle className="h-8 w-8 text-orange-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">System Status</p>
            <p className="text-2xl font-bold">Online</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
