import React, { useContext, useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthContext";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const [yourHabits, setYourHabits] = useState([]);

  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosSecure();
  // console.log(habits);
  useEffect(() => {
    axiosInstance
      .get(`/daiyliHabits?ownerEmail=${user?.email}`)
      .then((data) => {
        setYourHabits(data.data);
      });
  }, [axiosInstance, user]);
  console.log(yourHabits);

  const handleComplete = async (id) => {
    const res = await axiosInstance.patch(`/habits/${id}/complete`);

    setYourHabits((prevHabits) =>
      prevHabits.map((habit) => (habit._id === id ? res.data : habit)),
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {yourHabits.map((habit) => (
        <DashboardCard
          habit={habit}
          onComplete={handleComplete}
          key={habit._id}
        ></DashboardCard>
      ))}
    </div>
  );
};

export default Dashboard;
// daiyliHabits
