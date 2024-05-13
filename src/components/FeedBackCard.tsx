import { Avatar, Tooltip } from "@mui/material";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const FeedBackCard = ({
  feed,
  user,
  user_pic,
}: {
  feed: string;
  user: string;
  user_pic: string;
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
      <section className=" w-1/5 h-full flex flex-col justify-start items-start px-3 hover:border rounded-md">
        <Tooltip title={user}>
          <Avatar
            variant="rounded"
            src={
              user_pic
                ? user_pic
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s"
            }
          />
        </Tooltip>
      </section>
      <section className=" w-full h-full flex flex-col justify-start items-start px-3 hover:border rounded-md line-clamp-1 text-lg font-pop font-light">
        {feed}
      </section>
      <section className=" w-1/5 h-full  rounded-md flex justify-center items-center">
        <div className="w-full h-full flex  hover:border justify-center items-center hover:bg-slate-400 rounded-xl hover:bg-opacity-30">
          <FiExternalLink color="#ffffff" size={"1.5em"} />
        </div>
      </section>
    </div>
  );
};

export default FeedBackCard;
