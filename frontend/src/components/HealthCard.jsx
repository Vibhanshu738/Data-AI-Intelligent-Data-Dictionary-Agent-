import React from "react";

const HealthCard = ({ health }) => {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h3 className="font-bold mb-2">Health Status</h3>
      <p className="text-4xl font-bold">{health.score}</p>
      <p className={health.status === "success" ? "text-green-500" : "text-yellow-500"}>
        {health.status}
      </p>
    </div>
  );
};

export default HealthCard;