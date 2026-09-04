import React from "react";
import { useLoaderData } from "react-router";

const HabitDetails = () => {
  const useData = useLoaderData();
  const { title, category, description, image, frequency, _id } = useData;

  console.log(useData);
  return (
    <div className="rounded-2xl border  p-6 shadow-sm w-2xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm">🔥{frequency}</span>
      </div>

      <p className="mb-3 text-sm">{description}</p>

      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-black font-bold">
        {category}
      </span>

      <div className="mt-5 flex justify-between">
        <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
          Habit Choose For You
        </button>
        <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
          Choose For You
        </button>
      </div>
    </div>
  );
};

export default HabitDetails;
