import React from "react";

export default function HabitList({ habits, incrementDay }) {
  return (
    <div className="bg-black/60 p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Streaks</h2>
      {habits.length === 0 && <p>No habits yet. Add one above! 🚀</p>}
      {habits.map((habit, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-2 p-2 bg-white/10 rounded"
        >
          <span>
            {habit.emoji} {habit.name}: {habit.days} day{habit.days !== 1 && "s"}
          </span>
          <button
            onClick={() => incrementDay(index)}
            className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded"
          >
            +1 ✅
          </button>
        </div>
      ))}
    </div>
  );
}
