import {
  Avatar,
  LinearProgress,
  linearProgressClasses,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const CompletionProgresscard = ({
  progress,
  title,
  i_name,
  i_src,
}: {
  progress: number;
  title: string;
  i_name: string;
  i_src: string;
}) => {
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
        <div className=" w-full flex justify-start items-center h-5/6 text-2xl font-Gro line-clamp-1">
          {title}
        </div>
        <div className=" w-full h-1/6 mb-2  ">
          <div>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                display: "flex",
                height: "10px",
                backgroundColor: "#a78bfa",
                borderRadius: "10px",
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: "#c4b5fd",
                  borderRadius: "10px",
                },
              }}
            />
          </div>
        </div>
      </section>
      <section className=" w-1/5 h-full hover:border rounded-md flex justify-center items-center">
        <Tooltip title={i_name}>
          <Avatar
            variant="rounded"
            src={
              i_src
                ? i_src
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s"
            }
          />
        </Tooltip>
      </section>
      {hover && (
        <section className=" w-1/5 h-full hover:border rounded-md flex justify-center items-center">
          <FiExternalLink size={"1.5em"} color="#ffffff" />
        </section>
      )}
    </div>
  );
};

export default CompletionProgresscard;
