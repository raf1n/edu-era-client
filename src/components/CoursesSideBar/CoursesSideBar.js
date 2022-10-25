import React from "react";

const CoursesSideBar = ({ course }) => {
  return (
    <div>
      <button>{course.name}</button>
    </div>
  );
};

export default CoursesSideBar;
