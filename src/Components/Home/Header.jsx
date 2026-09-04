// import React from "react";

// const Header = () => {
//   return (
//     <div className="w-7xl mx-auto">
//       <section className="text-center my-10">
//         <div>
//           <h1 className="font-bold text-5xl">
//             {" "}
//             Build Better Habits │ One Day at a Time
//           </h1>
//           <p className="mt-10">
//             Small daily actions can create big │ changes. Track your habits and
//             keep │ your streak alive.
//           </p>
//         </div>
//       </section>

//       <section className="border border-yellow-300 text-center  my-10">
//         <h2 className="">How It Works</h2>

//         <div className="flex justify-between">
//           <div>
//             <h3>Create</h3>
//             <p>Create your daily habit.</p>
//           </div>

//           <div>
//             <h3>Track</h3>
//             <p>Complete it every day.</p>
//           </div>

//           <div>
//             <h3>Track</h3>
//             <p>Complete it every day.</p>
//           </div>
//         </div>
//       </section>

//       {/* Why HabitFlow */}
//       <section className="border border-yellow-300 text-center  my-10">
//         <h2>Why HabitFlow</h2>

//         <div>🔥 Build Streaks</div>
//         <div>📊 Track Progress</div>
//         <div>🎯 Stay Focused</div>
//       </section>

//       {/* Popular Habits */}
//       <section className="border border-yellow-300 text-center  my-10">
//         <h2>Popular Habits</h2>

//         {/* Habit Cards will come here */}
//       </section>
//     </div>
//   );
// };

// export default Header;
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-semibold mb-4">
            Welcome to HabitFlow
          </p>

          <h1 className="font-bold text-4xl md:text-6xl leading-tight">
            Build Better Habits
            <span className="text-primary"> One Day at a Time</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-8">
            Small daily actions can create big changes. Track your habits, build
            powerful streaks, and keep moving toward a better you.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="btn btn-primary">Explore Habits</button>

            <button className="btn btn-outline">Create Habit</button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>

          <p className="text-gray-500 mt-3">
            Building a better routine is easier than you think.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <div className="text-4xl mb-3">✍️</div>

              <h3 className="text-xl font-bold">Create</h3>

              <p className="text-gray-500">
                Create your daily habit and set your goal.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <div className="text-4xl mb-3">📅</div>

              <h3 className="text-xl font-bold">Track</h3>

              <p className="text-gray-500">
                Complete your habit every day and track your progress.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body text-center">
              <div className="text-4xl mb-3">🌱</div>

              <h3 className="text-xl font-bold">Grow</h3>

              <p className="text-gray-500">
                Build your streak and become better every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HabitFlow */}
      <section className="my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Why HabitFlow?</h2>

          <p className="text-gray-500 mt-3">
            Everything you need to stay consistent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-base-200 text-center">
            <div className="text-4xl">🔥</div>

            <h3 className="text-xl font-bold mt-4">Build Streaks</h3>

            <p className="text-gray-500 mt-2">
              Stay consistent and keep your streak alive.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-base-200 text-center">
            <div className="text-4xl">📊</div>

            <h3 className="text-xl font-bold mt-4">Track Progress</h3>

            <p className="text-gray-500 mt-2">
              See your progress and understand your daily habits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-base-200 text-center">
            <div className="text-4xl">🎯</div>

            <h3 className="text-xl font-bold mt-4">Stay Focused</h3>

            <p className="text-gray-500 mt-2">
              Keep your goals clear and stay focused every day.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Habits */}
      <section className="my-16 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Popular Habits</h2>

          <p className="text-gray-500 mt-3">
            Start with a habit that fits your lifestyle.
          </p>
        </div>

        {/* Habit Cards will come here */}
      </section>
    </div>
  );
};

export default Header;
