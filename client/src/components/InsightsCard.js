function InsightsCard({ insights }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-3">Insights</h2>

      {Array.isArray(insights) ? (
        insights.map((i, index) => (
          <p key={index}>• {i}</p>
        ))
      ) : (
        <p>{insights?.message}</p>
      )}
    </div>
  );
}

export default InsightsCard;