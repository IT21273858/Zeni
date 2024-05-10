import React from "react";
import { CourseCards, NavBar } from "../components";

const AllCourses = () => {
  return (
    <div className="  w-screen h-screen pt-5 px-3 grid place-items-center">
      <NavBar />
      <div className=" w-4/5 h-10 bg-pink-500 mt-12 flex items-center justify-center rounded-md">
        <input
          type="search"
          className=" h-full placeholder-white w-4/5 bg-transparent text-xl text-white px-6"
          placeholder="All Courses"
        />
        <div className=" w-1/5 h-full hover:bg-purple-800 cursor-pointer bg-purple-500 text-white font-Gro text-xl flex justify-center items-center rounded-r-md">
          Search
        </div>
      </div>

      <div className=" w-full px-10 mb-5 grid grid-cols-4 mt-10 gap-y-5 place-items-center">
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
        <CourseCards thumb="" />
      </div>
    </div>
  );
};

export default AllCourses;
