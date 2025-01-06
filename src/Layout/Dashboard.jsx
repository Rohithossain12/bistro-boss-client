import {
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              {" "}
              <img
                className="h-4 w-4"
                src="https://img.icons8.com/?size=48&id=iEeXZSQ5adAq&format=png"
                alt=""
              />{" "}
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart></FaShoppingCart>My Cart ( {cart.length} )
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <img
                className="h-4 w-4"
                src="https://img.icons8.com/?size=50&id=10445&format=png"
                alt=""
              />{" "}
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              {" "}
              <FaList></FaList> Booking List
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
