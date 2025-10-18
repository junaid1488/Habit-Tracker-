import React from "react";

const getLast30Days = () => {
  const dates = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d);
  }
  return dates;
};

export default function CalendarView({ habits }) {
  const last30Days = getLast30Days();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">📅 Calendar (Last 30 days)</h2>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {last30Days.map((date) => {
          const dateStr = date.toISOString().split("T")[0];
          const completed = habits.some((h) => h.completedDays.includes(dateStr));
          return (
            <div
              key={dateStr}
              className={`w-full h-8 flex items-center justify-center text-xs rounded 
                ${completed ? "bg-green-500 text-white font-bold" : "bg-white/10 text-gray-300"}`}
              title={dateStr}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
      <p className="text-xs mt-2 text-gray-300">✅ Green = completed habit</p>
    </div>
  );
}
