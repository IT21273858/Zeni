import { Avatar, Tooltip } from "@mui/material";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const CompletedCourseCard = () => {
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
          Distruputed Systems
          <span className=" text-lg px-2 font-pop font-light">
            {" "}
            completed @ 20
          </span>
        </div>
      </section>
      <section className=" w-1/5 h-full hover:border rounded-md flex justify-center items-center">
        <Tooltip title={"instructor"}>
          <Avatar
            variant="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s"
          />
        </Tooltip>
      </section>
      {hover && (
        <section className=" w-1/5 h-full hover:border rounded-md flex justify-center items-center">
          <FiExternalLink size={"2em"} color="#ffffff" />
        </section>
      )}
    </div>
  );
};

export default CompletedCourseCard;
