import React from "react";
import { Link } from "react-router-dom";

const CoursesSideBar = ({ course }) => {
  const { id, name } = course;
  return (
    <div>
      <ul className="menu menu-compact lg:menu-normal bg-base-100 w-60 lg:w-48 p-2">
        <li className="font-semibold border shadow-md rounded-lg border-blue-200">
          <Link to={`/course/${id}`} className="flex justify-center">
            <span className="text-xl lg:text-base">{name}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CoursesSideBar;
