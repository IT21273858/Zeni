import axios from "axios";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SucessSignup = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Deleted Succesfully",
  });
};

const InstructorsCourses = ({
  title,
  id,
  inst_id,
}: {
  title: string;
  id: string;
  inst_id: string;
}) => {
  const [hover, setHover] = useState(false);
  const hoverhandle = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };

  const handleDelete = () => {
    console.log("income" + id);
    const body = {
      c_InstructorID: inst_id,
    };
    axios
      .delete(`${import.meta.env.VITE_BACKEND_COURSE}/course/delete` + id)
      .then((value) => {
        if (value.status == 200) SucessSignup();
      })
      .catch((err) => {
        console.error("Deleted course \t" + id + "\t\t" + err);
      });
  };

  return (
    <div
      onMouseOver={hoverhandle}
      onPointerLeave={handleLeave}
      className=" w-full h-16 border bg-white bg-opacity-15 border-purple-300 rounded-md flex cursor-pointer"
    >
      <section className=" w-full h-full flex flex-col justify-start items-start px-3 hover:border rounded-md">
        <Link
          to={{
            pathname: "/course/view",
          }}
          state={{
            id: "hai",
          }}
        >
          {!hover && (
            <div className=" w-full flex flex-col justify-center items-start h-full text-2xl font-Gro line-clamp-1">
              {title}
            </div>
          )}
          {hover && (
            <div className=" w-full flex underline underline-offset-4 flex-col justify-center items-start h-full text-2xl font-Gro line-clamp-1">
              {title}
            </div>
          )}
        </Link>
      </section>
      <section className=" w-2/5 h-full  rounded-md flex justify-center items-center">
        <div className="w-1/2 h-full flex  hover:border justify-center items-center hover:bg-slate-400 rounded-xl hover:bg-opacity-30">
          <FiEdit color="#4c1d95" size={"1.5em"} />
        </div>
        <div
          className="w-1/2 h-full flex hover:border justify-center hover:bg-slate-400 hover:bg-opacity-30 rounded-xl items-center"
          onClick={handleDelete}
        >
          <FiTrash color="#4c0519" size={"1.5em"} />
        </div>
      </section>
    </div>
  );
};

export default InstructorsCourses;
