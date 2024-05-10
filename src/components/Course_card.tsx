import { Avatar, Chip, Tooltip } from "@mui/material";
import { Badge } from "@radix-ui/themes";

const Course_card = ({ thumb }: { thumb: string }) => {
  return (
    <div className=" w-80 flex flex-col rounded-md drop-shadow-xl h-96 bg-purple-400 text-white">
      <div className="flex w-full  h-3/6">
        <img
          className=" w-full relative h-full object-cover rounded-md"
          src={thumb}
        />
        <div className="absolute z-30 right-7 top-3">
          <Chip
            label="FREE"
            className=" relative z-20 "
            variant="filled"
            style={{
              color: "#9f1239",
              backgroundColor: "#2dd4bf",
              fontFamily: "Roboto",
              fontWeight: 700,
              fontStyle: "normal",
              borderRadius: "10px",
              padding: 0,
            }}
            clickable={false}
          />
        </div>
      </div>
      {/*  */}
      <span className=" text-left flex justify-start px-3  font-medium text-xl w-full">
        Directory Services and Network Management
      </span>
      {/*  */}
      <div className=" w-full h-16 px-3 text-purple-950  grid grid-rows-2 ">
        <div className="w-full text-left flex items-center text-md font-medium">
          <em>Tags:</em>
        </div>
        <div className="w-full h-full overflow-hidden grid grid-cols-2 justify-start items-center gap-3  ">
          <Chip
            label="Software-Engineer"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#ecfccb",
              backgroundBlendMode: "multiply",
            }}
          />
          <Chip
            label="Data Science"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#fef08a",
              backgroundBlendMode: "multiply",
            }}
          />
        </div>
      </div>
      {/*  */}
      <div className=" w-full h-full items-center flex gap-3  px-3 text-purple-950  ">
        <span className="">
          <Tooltip title="Instructor">
            <Avatar
              variant="rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s"
            />
          </Tooltip>
        </span>
        <span className=" h-full items-end py-3 text-xl flex justify-center font-semibold font-TT1">
          Asmitha Thiraviyam
        </span>
      </div>
    </div>
  );
};

export default Course_card;