import React, { use } from "react";
import HabitCard from "./HabitCard";

const habitsData = fetch("https://my-habit-flow-server.vercel.app/habits").then(
  (res) => res.json(),
);

const Habits = () => {
  const habits = use(habitsData);
  console.log(habits);
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-12">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Explore Public Habits</h1>

          <p className="mt-2">Discover habits and build a better routine.</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {habits.map((habit) => (
            <HabitCard key={habit._id} habit={habit}></HabitCard>
          ))}
        </div>

        {/* Search + Filter */}
        {/* <div className="mb-10">
          <input
            type="text"
            placeholder="Search habits..."
            className="w-full rounded-lg border px-4 py-3"
          />

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button>All</button>
            <button>Morning</button>
            <button>Work</button>
            <button>Fitness</button>
            <button>Evening</button>
            <button>Study</button>
          </div>
        </div> */}

        {/* Habit Cards */}
        <div>{/* Habit cards will come here */}</div>
      </section>
    </div>
  );
};

export default Habits;
