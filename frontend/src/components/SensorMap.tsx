import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Device {
  sensor_id: string;
  location?: string;
  status: string;
  lat?: number;
  lng?: number;
}

export default function SensorMap({ devices }: { devices: Device[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Sensor Locations</CardTitle>
        <CardDescription>
          Geographic distribution of footfall sensors (Static View)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-100 rounded-lg p-8 min-h-96 flex flex-col items-center justify-center">
          <MapPin className="h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Static Sensor Overview
          </h3>
          <p className="text-gray-500 text-center mb-6">
            This section shows all known sensors and their current status
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {devices.map((device) => (
              <div key={device.sensor_id} className="bg-white rounded-lg p-4 border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{device.sensor_id}</span>
                  <Badge
                    variant={
                      device.status === "active" ? "default" : "destructive"
                    }
                  >
                    {device.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  {device.location || "Unknown Location"}
                </p>
                {device.lat && device.lng ? (
                  <p className="text-xs text-gray-400">
                    {device.lat.toFixed(4)}, {device.lng.toFixed(4)}
                  </p>
                ) : (
                  <p className="text-xs text-gray-400 italic">Coordinates not available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
