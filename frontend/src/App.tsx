import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Mini Footfall Monitoring System
              </h1>
              <p className="text-gray-600 mt-1">
                Real-time monitoring and analytics
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRefresh((prev) => !prev)}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <Dashboard refresh={refresh} />
    </div>
  );
}

export default App;
