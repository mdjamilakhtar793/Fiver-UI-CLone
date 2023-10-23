import React from "react";
import {
  Home,
  NavBars,
  Footer,
  Gigs,
  Gig,
  MyGigs,
  Add,
  Messages,
  SingleMessages,
  Orders,
} from "./Components/index";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";
const App = () => {
  const Layouts = () => {
    return (
      <div>
        <NavBars />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },

        {
          path: "/orders",
          element: <Orders />,
        },

        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <SingleMessages />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
