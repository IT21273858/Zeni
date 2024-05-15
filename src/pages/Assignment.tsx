import { FiArrowLeft, FiEdit3, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";

const TextArea = () => {
  return (
    <>
      <div className=" w-full flex flex-col px-10 mt-5">
        <span className=" text-left text-xl font-pop font-semibold mb-5 flex gap-3 items-center">
          <FiEdit3 size="1.3rem" />
          Submit your Answer below
        </span>
        <textarea
          rows={6}
          className=" w-3/5 bg-transparent border-2 rounded-md border-purple-400 resize-none"
        />
      </div>
    </>
  );
};
const Documents = () => {
  return (
    <>
      <div className=" w-full flex flex-col px-10 mt-8">
        <Link
          target="_blank"
          to={"https://youtu.be/41W7sRc5wps?si=6DfMn0BppPuJ0DfQ"}
        >
          <span className=" text-left text-xl font-pop font-semibold mb-5 flex gap-3 items-center">
            <FiLink size={"1.3rem"} />
            Resource
          </span>
        </Link>
      </div>
      <div className=""></div>
    </>
  );
};

const Assignment = () => {
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
        Assignment Document
      </div>
      <div className=" w-full grid">
        <Documents />
        <TextArea />
      </div>
      <div className="flex justify-end px-8">
        <Btn color="#8b44fc" textcolor="#ffffff" hovercolor="#7834e3">
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default Assignment;
