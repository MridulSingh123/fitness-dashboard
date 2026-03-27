import WeightChart from "./WeightChart";

function WeightChartCard({ weightData }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">
        Weight Progress
      </h2>

      <div className="flex justify-center">
        <WeightChart data={weightData} />
      </div>
    </div>
  );
}

export default WeightChartCard;