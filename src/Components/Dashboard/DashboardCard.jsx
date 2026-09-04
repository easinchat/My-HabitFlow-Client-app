import React from "react";

const DashboardCard = ({ habit, onComplete }) => {
  const today = new Date().toISOString().split("T")[0];
  const isCompletedToday = habit.completionHistory?.includes(today);

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <figure>
        <img
          src={habit.image}
          alt={habit.title}
          className="w-full h-52 object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{habit.title}</h2>

          <div className="badge badge-primary">{habit.category}</div>
        </div>

        <p className="text-gray-500">{habit.description}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-outline">{habit.frequency}</span>

          <span className="text-sm text-gray-500">
            {habit.completionHistory?.length || 0} days completed
          </span>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => onComplete(habit._id)}
            disabled={isCompletedToday}
            className={`btn ${
              isCompletedToday ? "btn-success" : "btn-primary"
            }`}
          >
            {isCompletedToday ? "Completed Today" : "Complete Today"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
