import Navbar from "./components/Navbar";
import DashboardCard from "./components/DashboardCard";
import { TrendingUp } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />

      {/* Add enough padding to push content below 64px navbar */}
      <main className="pt-20 px-4">
        <h1 className="text-2xl font-bold">Welcome to the UI Template Repo</h1>
        <p className="mt-2 text-gray-600">
          Tailwind is working — and this is your dev playground.
        </p>

        <div className="mt-10 max-w-md mx-auto">
          <DashboardCard
            title="Weekly Growth"
            value="+18.5%"
            icon={<TrendingUp className="w-6 h-6" />}
          />
        </div>
      </main>
    </>
  );
}

export default App;
