import React from "react";
import { Link } from "react-router-dom";

const CoursesCards = ({ course }) => {
  const { name, img, id } = course;
  return (
    <Link to={`/course/${id}`}>
      <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-56" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-center">
            <button className="btn btn-wide btn-outline">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoursesCards;
