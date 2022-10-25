import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(true);
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/courses" className="justify-between">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174675.png"
            className="h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <Link className="btn btn-ghost normal-case text-xl">Edu Era</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {isShown && <small>Rahim uddin Rafin</small>}
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  src="https://placeimg.com/192/192/people"
                  alt="avatar"
                />
              </div>
            </div>
            <Link className="btn btn-sm ml-3">Log Out</Link>
          </>
        ) : (
          <Link className="btn btn-sm ml-3">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
