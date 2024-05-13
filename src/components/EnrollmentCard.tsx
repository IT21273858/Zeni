import { useState } from "react";

const EnrollmentCard = ({
  count,
  ctitle,
}: {
  count: string;
  ctitle: string;
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
      className=" w-full h-16 border bg-white bg-opacity-15 border-purple-300 rounded-md flex cursor-default"
    >
      <section className=" w-full h-full flex flex-col justify-center items-start px-3 hover:border rounded-md line-clamp-1 text-lg font-pop font-medium">
        {ctitle}
      </section>
      <section className=" w-1/5 h-full  rounded-md flex justify-center items-center text-2xl">
        <div className="w-full h-full flex  hover:border justify-center items-center hover:bg-slate-400 rounded-xl hover:bg-opacity-30">
          {count}
        </div>
      </section>
    </div>
  );
};

export default EnrollmentCard;
