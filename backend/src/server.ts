import app from "./app";
import { startSimulator } from "./sensore/simulator.script";
import { connectDB } from "./utils/db";

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        startSimulator()
    });
});