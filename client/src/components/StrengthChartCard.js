import StrengthChart from "./StrengthChart";

function StrengthChartCard({ strengthData }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-3">
        Strength Chart 💪
      </h2>

      <div className="flex justify-center">
        <StrengthChart data={strengthData} />
      </div>
    </div>
  );
}

export default StrengthChartCard;