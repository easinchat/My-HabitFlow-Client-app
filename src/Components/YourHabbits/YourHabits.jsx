import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";

import YourHabitCards from "./YourHabitCards";

import { AuthContext } from "../../Provider/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const YourHabits = () => {
  const [yourHabits, setYourHabits] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosSecure();
  useEffect(() => {
    axiosInstance.get(`/userHabits?ownerEmail=${user?.email}`).then((data) => {
      setYourHabits(data.data);
    });
  }, [axiosInstance, user]);

  // console.log(yourHabits);
  return (
    <div className=" ">
      <NavLink to={"/createHabits"} className="btn btn-primary  ">
        Create Your Own Habbit
      </NavLink>
      <div className="grid grid-cols-3 gap-5 mt-20">
        {yourHabits.map((yourHabit) => (
          <YourHabitCards
            key={yourHabit._id}
            yourHabit={yourHabit}
          ></YourHabitCards>
        ))}
      </div>
    </div>
  );
};

export default YourHabits;
