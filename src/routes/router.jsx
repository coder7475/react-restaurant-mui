import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import Menu from "../pages/Menu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from '../pages/AllUsers';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),

    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "users",
        element: <AllUsers/>
      }
    ],
  },
]);
