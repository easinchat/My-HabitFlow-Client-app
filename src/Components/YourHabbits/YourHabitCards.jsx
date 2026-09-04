import { NavLink } from "react-router";

const YourHabitCards = ({ yourHabit }) => {
  const { title, category, description, image, frequency, _id } = yourHabit;
  return (
    <div className="rounded-2xl border  p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm">🔥{frequency}</span>
      </div>

      <p className="mb-3 text-sm">{description}</p>

      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-black font-bold">
        {category}
      </span>

      <div className="mt-5 flex justify-between">
        <NavLink className="btn btn-primary">View Details</NavLink>
        <NavLink className="btn btn-primary">Choose For You</NavLink>
      </div>
    </div>
  );
};

export default YourHabitCards;
