import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

import { HiShoppingCart } from "react-icons/hi";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <div className="flex md:flex-row flex-col justify-center  items-center">
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">ORDER FOOD</NavLink>
      </li>
      <li>
        <Link to="/">
          <HiShoppingCart size={25} />
          <button className="px-2 py-1.5 bg-white rounded-lg">
            <div className="badge text-white bg-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </div>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user?.photoURL}
            alt=""
          />
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn ">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn ">
                LOGIN
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
