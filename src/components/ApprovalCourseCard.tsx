import {
  Avatar,
  LinearProgress,
  linearProgressClasses,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiEdit,
  FiExternalLink,
  FiTrash,
  FiTrash2,
} from "react-icons/fi";
import Badge from "./Badge";

const ApprovalCourseCard = () => {
  const [hover, setHover] = useState(false);
  const hoverhandle = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };
  return (
    <div
      onMouseOver={hoverhandle}
      onPointerLeave={handleLeave}
      className=" w-full h-16 border bg-white bg-opacity-15 border-purple-300 rounded-md flex cursor-pointer"
    >
      <section className=" w-full h-full flex flex-col justify-start items-start px-3 hover:border rounded-md">
        {!hover && (
          <div className=" w-full flex flex-col justify-center items-start h-full text-2xl font-Gro line-clamp-1">
            Directory Services and Network Management
          </div>
        )}
        {hover && (
          <div className=" w-full flex underline underline-offset-4 flex-col justify-center items-start h-full text-2xl font-Gro line-clamp-1">
            Directory Services and Network Management
          </div>
        )}
      </section>
      <section className=" w-1/5 h-full  rounded-md flex justify-center items-center">
        <Tooltip title="Instructor">
          <Avatar
            variant="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s"
          />
        </Tooltip>
      </section>
      <section className=" w-3/5 h-full  rounded-md flex justify-center items-center">
        <div className="w-1/2 h-full flex  hover:border justify-center items-center hover:bg-slate-400 rounded-xl hover:bg-opacity-30">
          <Badge title="Approve" textColor="#ffffff" color="#10b981" />
        </div>
        <div className="w-1/2 h-full flex hover:border justify-center hover:bg-slate-400 hover:bg-opacity-30 rounded-xl items-center">
          <FiTrash color="#4c0519" size={"1.5em"} />
        </div>
      </section>
    </div>
  );
};

export default ApprovalCourseCard;
