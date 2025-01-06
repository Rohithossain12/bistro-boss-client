import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Reservation from "../Pages/Dashboard/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome";
import AddReview from "../Pages/Dashboard/AddReview";
import BookingList from "../Pages/Dashboard/BookingList";
import AllUsers from "../Pages/Dashboard/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "payment",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "review",
        element: <AddReview></AddReview>,
      },
      {
        path: "booking",
        element: <BookingList></BookingList>,
      },


      // admin routes
      {
        path:'users',
        element:<AllUsers></AllUsers>
      }
    ],
  },
]);
