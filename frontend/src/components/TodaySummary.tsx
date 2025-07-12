import { fetchFootfallData } from "@/api/footfallApi";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function TodaySummary() {
  const [todayData, setTodayData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchFootfallData();
        const today = new Date().toISOString().split("T")[0];
        const filtered = data.filter((d: any) => d._id.startsWith(today));
        setTodayData(filtered);
      } catch (err) {
        console.error("Failed to fetch footfall data", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Today's Footfall Summary</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-6 w-16 mb-2" />
                <Skeleton className="h-3 w-28 mb-2" />
                <Skeleton className="h-6 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : todayData.length === 0 ? (
        <p className="text-red-500 text-sm">No data found for today.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todayData.map((sensor) => (
            <Card key={sensor._id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{sensor._id}</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sensor.totalCount}</div>
                <p className="text-xs text-muted-foreground mt-1">Sensor Time Block</p>
                <Badge variant="secondary" className="mt-2">
                  Total Today
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
