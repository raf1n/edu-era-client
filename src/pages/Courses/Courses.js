import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCards from "../../components/CoursesCards/CoursesCards";
import CoursesSideBar from "../../components/CoursesSideBar/CoursesSideBar";

const Courses = () => {
  const coursesCategory = useLoaderData();
  //   console.log(coursesCategory);
  const [allCourse, setAllCourse] = useState([]); //   console.log(coursesCategory);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl">
        explore our <br /> awesome{" "}
        <span className="underline decoration-blue-500">Courses</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-evenly mt-6 lg:mt-10">
        <div className="w-52">
          {coursesCategory.map((course) => (
            <CoursesSideBar key={course.id} course={course}></CoursesSideBar>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8 mt-4 lg:mt-0">
          {allCourse.map((course) => (
            <CoursesCards key={course.id} course={course}></CoursesCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
