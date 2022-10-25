import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCards from "../../components/CoursesCards/CoursesCards";
import CoursesSideBar from "../../components/CoursesSideBar/CoursesSideBar";

const Courses = () => {
  const coursesCategory = useLoaderData();
  //   console.log(coursesCategory);
  return (
    <div className="grid grid-cols-2 m-10">
      <div>
        {coursesCategory.map((course) => (
          <CoursesSideBar key={course.id} course={course}></CoursesSideBar>
        ))}
      </div>
      <div>
        {coursesCategory.map((course) => (
          <CoursesCards key={course.id} course={course}></CoursesCards>
        ))}
      </div>
    </div>
  );
};

export default Courses;
