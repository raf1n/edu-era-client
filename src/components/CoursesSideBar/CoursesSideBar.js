import React from "react";
import { Link } from "react-router-dom";

const CoursesSideBar = ({ course }) => {
  const { id, name } = course;
  return (
    <div>
      {/* <button className="btn">{course.name}</button> */}
      <ul className="menu menu-compact lg:menu-normal bg-base-100 w-48 p-2 rounded-box">
        <li>
          <Link to={`/course/${id}`}>{name}</Link>
        </li>
      </ul>
    </div>
  );
};

export default CoursesSideBar;
