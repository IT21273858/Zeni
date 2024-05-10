import React from "react";
import { NavBar } from "../components";
import Btn from "../components/Btn";
import { FiPlus } from "react-icons/fi";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const to = useNavigate();
  return (
    <div className="flex w-screen h-screen pt-5 flex-col">
      <div className=" px-3">
        <NavBar />
      </div>
      <div className="w-full flex flex-col h-full py-5 bg-purple-900">
        <span className=" w-full flex underline justify-center text-white font-pop font-medium text-3xl">
          Create New Course
        </span>
        <div className=" grid grid-cols-6 w-full h-full">
          <section className=" w-full flex gap-5 flex-col  items-start col-span-4 mt-10 font-pop font-medium text-white text-2xl px-8">
            <section className=" w-full flex gap-4 items-start flex-col ">
              <span>Course Name</span>
              <input
                type="text"
                className=" px-5 w-3/5 bg-transparent border-2 rounded-md border-purple-400"
              />
            </section>
            <section className=" w-full flex gap-4 items-start">
              <div className=" justify-start flex flex-col w-1/4 ">
                <span className=" flex justify-start">Total Credit</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className=" px-5 w-3/5 bg-transparent border-2 rounded-md border-purple-400"
                />
              </div>
              <div className=" justify-start flex flex-col w-1/2 ">
                <Tooltip title={"Free or Paid"}>
                  <span className=" flex justify-start cursor-pointer">
                    CourseType
                  </span>
                </Tooltip>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className=" px-5 w-3/5 bg-transparent border-2 rounded-md border-purple-400"
                />
              </div>
            </section>
            <section className=" w-full flex gap-4 items-start flex-col ">
              <span>Course Description</span>
              <textarea
                rows={4}
                className=" w-3/5 bg-transparent border-2 rounded-md border-purple-400 resize-none"
              />
            </section>
            <section className=" w-full flex gap-4 items-start  text-lg ">
              <span>Upload Image</span>
              <input type="file" multiple={false} accept="image/*" />
            </section>
            <section className=" w-full flex gap-4 items-start flex-col ">
              <div
                onClick={() => {
                  to("/course/modules");
                }}
              >
                <Btn color="#3b0764" textcolor="#ffffff" hovercolor="#a855f7">
                  <FiPlus color="#ffffff" />
                  <span className=" text-xl ">Create Course</span>
                </Btn>
              </div>
            </section>
          </section>
          <section className=" w-full col-span-2 font-pop font-medium text-white text-2xl flex items-center justify-center bg-purple-400">
            <div className=" w-4/5 h-5/6 bg-purple-600"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
