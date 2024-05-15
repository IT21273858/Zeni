import { Button } from "@mui/material";
import { CourseCards, FeedbackCard, NavBar } from "../components";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="flex w-screen h-screen pt-5 px-3 flex-col items-center overflow-y-scroll overflow-x-hidden">
      <NavBar />
      <div className=" w-full flex justify-center items-center text-4xl mt-3 font-TT2 font-semibold text-purple-800">
        POPULAR COURSES
      </div>
      <div className="grid grid-cols-4 gap-y-3 w-full mt-8 drop-shadow-lg place-items-center">
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
        <CourseCards thumb="https://cdn.venngage.com/template/thumbnail/small/7f9f09c9-5b9f-49e0-a21e-2328a0d9be71.webp" />
      </div>
      <div className=" w-full h-fit flex justify-center items-center my-5">
        <Link to={"/login"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7e22ce",
              color: "#ffffff",
              ":hover": {
                backgroundColor: "#a855f7",
              },
            }}
          >
            Explore More
          </Button>
        </Link>
      </div>
      <div className=" w-full h-fit flex flex-col justify-center items-center my-5">
        <span className=" text-5xl font-TT1 font-medium text-purple-900">
          How User Feels
        </span>
        <span className=" text-xl font-Gro font-medium text-purple-800">
          thelkapokcomppkp,zmkkp;, mkklal;s,a;l lklals;,s;a,s;am pkkaspo
        </span>
      </div>
      <div className=" w-full  flex justify-center items-center mb-10">
        <div className=" grid w-full h-full grid-flow-col gap-4 overflow-scroll">
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};

export default Courses;
