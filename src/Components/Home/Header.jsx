import React from "react";

const Header = () => {
  return (
    <div className="w-7xl mx-auto">
      <section className="text-center my-10">
        <div>
          <h1 className="font-bold text-5xl">
            {" "}
            Build Better Habits │ One Day at a Time
          </h1>
          <p className="mt-10">
            Small daily actions can create big │ changes. Track your habits and
            keep │ your streak alive.
          </p>
        </div>
      </section>

      <section className="border border-yellow-300 text-center  my-10">
        <h2 className="">How It Works</h2>

        <div className="flex justify-between">
          <div>
            <h3>Create</h3>
            <p>Create your daily habit.</p>
          </div>

          <div>
            <h3>Track</h3>
            <p>Complete it every day.</p>
          </div>

          <div>
            <h3>Track</h3>
            <p>Complete it every day.</p>
          </div>
        </div>
      </section>

      {/* Why HabitFlow */}
      <section className="border border-yellow-300 text-center  my-10">
        <h2>Why HabitFlow</h2>

        <div>🔥 Build Streaks</div>
        <div>📊 Track Progress</div>
        <div>🎯 Stay Focused</div>
      </section>

      {/* Popular Habits */}
      <section className="border border-yellow-300 text-center  my-10">
        <h2>Popular Habits</h2>

        {/* Habit Cards will come here */}
      </section>
    </div>
  );
};

export default Header;
