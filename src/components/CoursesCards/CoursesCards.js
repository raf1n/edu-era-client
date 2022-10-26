import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const CoursesCards = ({ course }) => {
  const { name, img, id, mentor, enrolled, rating } = course;
  return (
    <Link to={`/course/${id}`}>
      <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-56" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{name}</h2>
            <h3 className="font-medium text-blue-800 text-base">
              Mentor: <span className="text-black">{mentor}</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 mx-auto m-2">
            <p className="text-gray-600 dark:text-black font-semibold">
              Enrolled: {enrolled}
            </p>
            <p className="text-yellow-500 flex items-center">
              <span className="text-black mr-1 font-semibold">
                Rating: {rating}
              </span>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide btn-outline">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoursesCards;
