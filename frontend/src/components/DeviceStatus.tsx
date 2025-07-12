import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, WifiOff, Clock } from "lucide-react";
import type { Device } from "@/types";

export default function DeviceStatus({ devices }: { devices: Device[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Device Status
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {devices.map((device) => (
          <Card key={device.sensor_id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {device.sensor_id}
              </CardTitle>
              {device.status === "active" ? (
                <Wifi className="h-4 w-4 text-green-600" />
              ) : (
                <WifiOff className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Clock className="h-3 w-3 mr-1" />
                {new Date(device.lastSeen).toLocaleTimeString()}
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {device.location || "Unknown Location"}
              </p>
              <Badge
                variant={device.status === "active" ? "default" : "destructive"}
              >
                {device.status === "active" ? "Active" : "Inactive"}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
