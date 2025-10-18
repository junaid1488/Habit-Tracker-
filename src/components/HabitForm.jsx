import React, { useState } from "react";

export default function HabitForm({ addHabit, habits, updateHabit }) {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("💪");

  const handleAddHabit = () => {
    if (!name) return;
    addHabit({ name, emoji, completedDays: [] });
    setName("");
  };

  const markTodayDone = (habit) => {
    const today = new Date().toISOString().split("T")[0];
    if (!habit.completedDays.includes(today)) {
      const updated = {
        ...habit,
        completedDays: [...habit.completedDays, today],
      };
      updateHabit(updated);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
      />
      <button onClick={handleAddHabit} className="bg-blue-500 text-white">
        Add
      </button>

      <div className="mt-4">
        {habits.map((habit, i) => {
          const today = new Date().toISOString().split("T")[0];
          const doneToday = habit.completedDays.includes(today);
          return (
            <div key={i} className="flex justify-between items-center mb-2">
              <span>{habit.emoji} {habit.name}</span>
              <button
                onClick={() => markTodayDone(habit)}
                className={doneToday ? "completed px-3 py-1 rounded" : "bg-green-500 text-white px-3 py-1 rounded"}
              >
                {doneToday ? "✅ Done" : "Mark Today ✅"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
