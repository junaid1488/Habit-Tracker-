import React, { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import CalendarView from "./components/CalendarView";
import Streaks from "./components/Streaks";
import Analytics from "./components/Analytics";

export default function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("habits") || "[]");
    setHabits(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => setHabits([...habits, habit]);
  const updateHabit = (updatedHabit) => {
    setHabits(habits.map((h) => (h.name === updatedHabit.name ? updatedHabit : h)));
  };

  return (
    <div className="max-w-7xl w-full mx-auto">
      {/* Hero Section */}
      <div className="hero">
        <h1>Habit Tracker 🏆</h1>
        <p>Track your habits, monitor streaks, and achieve your goals! 🚀</p>
      </div>

      {/* Habit Form */}
      <div className="card">
        <HabitForm addHabit={addHabit} habits={habits} updateHabit={updateHabit} />
      </div>

      {/* Grid for Calendar, Streaks, Analytics */}
      <div className="grid-container">
        <div className="card">
          <CalendarView habits={habits} />
        </div>
        <div className="card">
          <Streaks habits={habits} />
        </div>
        <div className="card">
          <Analytics habits={habits} />
        </div>
      </div>
    </div>
  );
}
