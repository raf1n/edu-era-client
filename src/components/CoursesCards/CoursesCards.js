import React from "react";
import { Link } from "react-router-dom";

const CoursesCards = ({ course }) => {
  const { name, img, id } = course;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 h-56" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/course/${id}`}>
            <button className="btn btn-wide">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCards;
