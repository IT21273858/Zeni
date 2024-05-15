import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Checkbox, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components";
import NestedList from "../components/Dropdown";
// import Fab from '@mui/material/Fab';
// import NavigationIcon from '@mui/icons-material/Navigation';
// import { useNavigate } from "react-router-dom";

const CourseView = () => {
  // const to = useNavigate();

  const { state } = useLocation();
  const cid = state.cid;
  const [_COUR, setC] = useState<any | null>(null);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_COURSE}/course/get/` + cid)
      .then((data) => {
        if (data.status == 200) {
          console.log(data.data.course);
          setC(data.data.course);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex w-screen h-screen pt-5 flex-col">
      <div className=" px-3">
        <NavBar />
      </div>
      {_COUR && (
        <div className="w-full flex flex-col h-full py-5 bg-purple-900">
          <div className=" grid grid-cols-6 w-full h-full ">
            <section className=" w-full col-span-2 font-pop font-medium text-white text-2xl flex items-center justify-center">
              <div className=" w-4/5 h-5/6">
                <img
                  src={
                    _COUR.c_thumbnail
                      ? _COUR.c_thumbnail
                      : "https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp"
                  }
                  className=" rounded-2xl"
                />
              </div>
            </section>
            <section className=" w-full flex gap-5 flex-col  items-start col-span-4 mt-5 font-pop font-medium text-white text-2xl px-8">
              {/* <section className="w-full flex gap-5 justify-end ">
                          <button className=" bg-[#9a61f6] hover:bg-purple-700 hover:rounded-3xl rounded-2xl py-1 px-3">Enroll Free</button>
                      </section> */}
              <section className=" w-full flex gap-4 items-start flex-col ">
                <span className=" text-3xl">
                  {_COUR.c_name ? _COUR.c_name : ""}
                  <span className="text-[15px] text-[#a4a1a1] align-middle">
                    {" "}
                    ( Credit - {_COUR.c_credits ? _COUR.c_credits : 0})
                  </span>
                  <span className="align-middle">
                    <Box sx={{ position: "relative", display: "inline-flex" }}>
                      <CircularProgress variant="determinate" value={15} />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: "absolute",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="white"
                        >{`${Math.round(15)}%`}</Typography>
                      </Box>
                    </Box>
                  </span>
                </span>
              </section>
              <section className=" w-full flex gap-5 items-start">
                <span className=" text-[#ccc6c6] text-[14px] text-justify font-pop line-clamp-3">
                  {_COUR.c_description ? _COUR.c_description : ""}
                </span>
              </section>
              <section className=" w-full flex items-start">
                <div className=" justify-start flex flex-col w-1/2 ">
                  <span className=" flex justify-start text-[15px] text-[#a4a1a1]">
                    <img
                      src="https://media.licdn.com/dms/image/D5603AQHKr19m9u2QUA/profile-displayphoto-shrink_400_400/0/1702024910030?e=1720656000&v=beta&t=JDa079YJZzFMOK3HcmbBjZ2JvEpjCDWij1awyYrbcq4"
                      className="rounded-full h-[36px] w-[36px] "
                    />
                    <span className="justify-center ml-2">
                      {_COUR.c_InstructorId ? _COUR.c_InstructorId : ""}
                    </span>
                  </span>
                </div>
              </section>
            </section>
          </div>
          <div className=" w-full flex flex-col items-start px-10 mt-2 overflow-scroll">
            {_COUR && (
              <>
                {_COUR.module.map((mod: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className=" justify-start flex flex-col w-full"
                    >
                      <section className=" w-full flex gap-4 items-start flex-col ">
                        <span className="flex mt-2">
                          <Checkbox
                            {...label}
                            icon={<CheckCircleOutlineIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                          <Link to={"/Lesson"}>
                            <span className=" text-3xl font-serif text-violet-400">
                              {mod.m_name}
                            </span>
                          </Link>
                        </span>
                      </section>
                      <section className=" w-full flex gap-5 items-start">
                        <span className=" text-[#ccc6c6] text-[15px] text-justify font-pop line-clamp-2">
                          {mod.m_description}
                        </span>
                      </section>

                      <div className="w-full col-span-6 flex items-center justify-center px-5 mb-2">
                        <div className="justify-center items-center flex flex-col w-full">
                          <NestedList resources={mod.resources} />
                          {/* <Tree value={nodes} className="w-full md:w-30rem" /> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
      {/* <Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab> */}
    </div>
  );
};

export default CourseView;
