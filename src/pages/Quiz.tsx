import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Btn from "../components/Btn";
import { SingleQuiz } from "../components";

const Quiz = () => {
  return (
    <div className="flex w-screen h-screen pt-10 flex-col bg-purple-950 text-white overflow-scroll">
      {/* title */}
      <div className="w-full flex px-8  justify-between">
        <div className="flex gap-3">
          <FiArrowLeft
            size={"3rem"}
            className=" bg-purple-800 px-2 py-1 hover:bg-purple-900"
          />
          <span className=" text-5xl font-pop font-semibold  ">
            MODULE TITLE
          </span>
        </div>
        <div className=" text-xl">
          <Btn color="#ec4899" textcolor="#ffffff" hovercolor="#9d174d">
            Mark as Done
          </Btn>
        </div>
      </div>

      <div className=" w-3/5 mt-10 px-8 text-xl font-pop font-medium flex">
        Module Description
      </div>
      <div className=" w-4/5 text-left mt-2 px-8 text-xl font-pop font-light flex">
        A modular design can be characterized by functional partitioning into
        discrete scalable and reusable modules, rigorous use of well-defined
        modular interfaces, and making use of industry standards for interfaces.
        In this context modularity is at the component level, and has a single
        dimension, component slottability. A modular system with this limited
        modularity is generally known as a platform system that uses modular
        components. Examples are car platforms or the USB port in computer
        engineering platforms.
      </div>
      <div className=" font-xl text-left px-8 text-2xl font-pop font-semibold mt-8 underline-offset-4 underline">
        Quiz
      </div>
      <div className=" mt-5 px-10 w-3/5 grid gap-5">
        <SingleQuiz
          Qnum={""}
          Question={""}
          OptA={""}
          OptB={""}
          OptC={""}
          OptD={""}
        />
        <SingleQuiz
          Qnum={""}
          Question={""}
          OptA={""}
          OptB={""}
          OptC={""}
          OptD={""}
        />
        <SingleQuiz
          Qnum={""}
          Question={""}
          OptA={""}
          OptB={""}
          OptC={""}
          OptD={""}
        />
      </div>
      <div className=" font-xl  text-left px-8 text-2xl font-pop font-semibold mt-8">
        <div className=" w-3/5 px-10 flex justify-end">
          <div className=" w-2/4">
            <Btn textcolor={"#ffffff"} color={"#a855f7"} hovercolor={"#9333ea"}>
              Complete Quiz
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
