import React from "react";

export default function Analytics({ habits }) {
  const totalHabits = habits.length;
  const totalDays = habits.reduce((acc, h) => acc + h.days, 0);
  const avgStreak = totalHabits ? (totalDays / totalHabits).toFixed(1) : 0;

  return (
    <div className="bg-black/60 p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📊 Analytics</h2>
      <p>📝 Total Habits: {totalHabits}</p>
      <p>✅ Total Completed Days: {totalDays}</p>
      <p>🔥 Average Streak: {avgStreak} day{avgStreak !== 1 && "s"}</p>
    </div>
  );
}
