import React from "react";

export default function Streaks({ habits }) {
  return (
    <div className="bg-black/60 p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🔥 Habit Streaks</h2>
      {habits.length === 0 && <p>No habits yet. Add one above! 🚀</p>}
      {habits.map((habit, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span>{habit.emoji} {habit.name}</span>
            <span>{habit.days} day{habit.days !== 1 && "s"}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${Math.min(habit.days * 10, 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
