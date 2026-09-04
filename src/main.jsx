import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Components/RootLayout/RootLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import Habits from "./Components/Habits/Habits.jsx";

import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import HabitDetails from "./Components/Habits/HabitDetails.jsx";
import Register from "./Components/Register/Register.jsx";
import YourHabits from "./Components/YourHabbits/YourHabits.jsx";
import CreateHabits from "./Components/CreateHabits/CreateHabits.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/habits",
        element: <Habits></Habits>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "yourHabits",
        element: <YourHabits></YourHabits>,
      },

      {
        path: "/dashboard",
        loader: () =>
          fetch(`https://my-habit-flow-server.vercel.app/habits`).then((res) =>
            res.json(),
          ),

        element: <Dashboard></Dashboard>,
      },
      {
        path: "/habitDetails/:id",

        element: <HabitDetails></HabitDetails>,
      },
      {
        path: "/createHabits",
        element: <CreateHabits></CreateHabits>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
);
