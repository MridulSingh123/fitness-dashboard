function StatsCards({ weightData }) {
  const first = weightData[0]?.weight;
  const last = weightData[weightData.length - 1]?.weight;
  const diff = last - first;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h3>Total Entries</h3>
        <p className="text-xl font-bold">{weightData.length}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h3>Start Weight</h3>
        <p className="text-xl font-bold">{first || "--"} kg</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h3>Latest Weight</h3>
        <p className="text-xl font-bold">{last || "--"} kg</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h3>Trend</h3>
        <p className="text-l font-bold">
          {diff > 0 ? "📈 Your weight has increased." : diff < 0 ? "📉 Your weight has decreased." : "⚖️ Your weight is stable."}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;