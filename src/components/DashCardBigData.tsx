import { Tooltip } from "@mui/material";

const DashCardBigData = ({
  title,
  desc,
  bigdata,
}: {
  title: string;
  desc: string;
  bigdata: string;
}) => {
  return (
    <div className=" w-full h-36 flex bg-zinc-100 mb-3 py-1">
      <div className="h-full w-full flex flex-col text-purple-800">
        <span className=" text-3xl font-pop font-medium text-purple-700">
          {title}
        </span>
        <span className=" text-xl m-2 font-pop font-light text-purple-700  line-clamp-3">
          {desc}
        </span>
      </div>
      <Tooltip title={"New Enrollment for the month"}>
        <div className="h-full w-2/6 mx-4  flex font-pop text-5xl rounded-md bg-purple-950 text-white justify-center items-center">
          {bigdata}
        </div>
      </Tooltip>
    </div>
  );
};

export default DashCardBigData;
