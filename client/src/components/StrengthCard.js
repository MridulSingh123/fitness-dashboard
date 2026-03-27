function StrengthCard({ strengthData }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-3">
        Strength Progress 💪
      </h2>

      {strengthData.length === 0 ? (
        <p>No strength data yet</p>
      ) : (
        strengthData.map((item, index) => (
          <p key={index}>
            {new Date(item.date).toLocaleDateString()} → {item.maxWeight} kg
          </p>
        ))
      )}
    </div>
  );
}

export default StrengthCard;