import { useEffect, useState } from "react";
import API from "../services/api";

import StatsCards from "../components/StatsCards";
import InsightsCard from "../components/InsightsCard";
import WeightChartCard from "../components/WeightChartCard";
import StrengthCard from "../components/StrengthCard";
import StrengthChartCard from "../components/StrengthChartCard";

function Dashboard() {
  const [weightData, setWeightData] = useState([]);
  const [insights, setInsights] = useState([]);
  const [strengthData, setStrengthData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const weightRes = await API.get("/analytics/weight");
      const insightRes = await API.get("/analytics/insights");
      const strengthRes = await API.get("/analytics/strength");

      setWeightData(weightRes.data);
      setInsights(insightRes.data);
      setStrengthData(strengthRes.data);  
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* COMPONENTS */}
      <StatsCards weightData={weightData} />
      <InsightsCard insights={insights} />
      <WeightChartCard weightData={weightData} />
      <StrengthCard strengthData={strengthData} />
      <StrengthChartCard strengthData={strengthData} />

    </div>
  );
}

export default Dashboard;