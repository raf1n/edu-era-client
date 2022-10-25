import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCards from "../../components/CoursesCards/CoursesCards";
import CoursesSideBar from "../../components/CoursesSideBar/CoursesSideBar";

const Courses = () => {
  const coursesCategory = useLoaderData();
  //   console.log(coursesCategory);

  return (
    <div>
      <h1 class="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl">
        explore our <br /> awesome{" "}
        <span class="underline decoration-blue-500">Courses</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start  lg:justify-evenly mt-6 lg:mt-10">
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
    </div>
  );
};

export default Courses;
