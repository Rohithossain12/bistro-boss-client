import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">ORDER FOOD</NavLink>
      </li>
    </>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
            className="w-10 h-10 rounded-full object-cover"
            src={user?.photoURL}
            alt=""
          />
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="px-3 py-2.5 bg-white text-black rounded "
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-3 py-2 bg-white text-black rounded "
              >
                LOGIN
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
