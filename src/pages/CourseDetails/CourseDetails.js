import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaFilePdf, FaStarHalfAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = createRef();
const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { name, img, description, mentor, rating, enrolled } = courseDetails;
  console.log(courseDetails);
  return (
    <section className="bg-white">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex justify-center items-center mb-6 gap-4">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-3xl xl:text-3xl">
            {/* dark:text-white */}
            Learn <span className="text-blue-500">{name}</span> From Expert{" "}
            <br />
          </h1>
          <Pdf targetRef={ref} filename="course-details.pdf">
            {({ toPdf }) => (
              <FaFilePdf
                onClick={toPdf}
                className="h-10 mt-1 cursor-pointer"
              ></FaFilePdf>
            )}
          </Pdf>
        </div>
        <div className="lg:-mx-6 lg:flex items-center lg:items-center">
          <img
            className="object-center lg:w-1/2 lg:mx-6 w-full h-56 rounded-lg lg:h-[30rem]"
            src={img}
            alt=""
          />

          <div ref={ref} className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-black xl:text-4xl lg:w-96">
              {name}
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-600 ">
              {description}
            </p>

            <div className="flex justify-start items-center mt-6 gap-5 lg:gap-10">
              <h3 className="text-lg font-medium text-blue-600 ">
                Mentor: <span className="text-black">{mentor}</span>
              </h3>
              <p className="text-gray-600 dark:text-black">
                Total Enrolled: {enrolled}
              </p>
              <p className="text-yellow-500 flex items-center">
                <span className="text-black mr-1">Rating: {rating}</span>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt></FaStarHalfAlt>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="btn btn-outline normal-case flex items-center justify-between mt-4 lg:justify-start">
          <Link
            to={`/checkout/${courseDetails.id}`}
            className="inline-flex items-center py-2 space-x-2 text-sm text-grey-600"
          >
            <span className="text-base">Get Premium Access</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default CourseDetails;
