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

const PendingApproval = () => {
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
        <div className=" w-full flex flex-col justify-center items-start h-full text-2xl font-Gro line-clamp-1">
          Directory Services and Network Management
        </div>
      </section>
      <section className=" w-2/5 h-full  rounded-md flex justify-center items-center">
        <Badge title="Revoke Approval" color="#881337" textColor="#ffffff" />
      </section>
    </div>
  );
};

export default PendingApproval;
