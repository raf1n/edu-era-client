import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCards from "../../components/CoursesCards/CoursesCards";
import CoursesSideBar from "../../components/CoursesSideBar/CoursesSideBar";

const Courses = () => {
  const coursesCategory = useLoaderData();
  //   console.log(coursesCategory);
  return (
    <div className="flex justify-evenly mt-10">
      <div className="w-40">
        {coursesCategory.map((course) => (
          <CoursesSideBar key={course.id} course={course}></CoursesSideBar>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {coursesCategory.map((course) => (
          <CoursesCards key={course.id} course={course}></CoursesCards>
        ))}
      </div>
    </div>
  );
};

export default Courses;
