import { Tooltip } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import Swal from "sweetalert2";
import { ImageUploader, NavBar } from "../components";
import Btn from "../components/Btn";

const SucessCourseCreation = () => {
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
    title: "Course Created Succesfully",
  });
};

const ErrorPopup = () => {
  Swal.fire({
    icon: "error",
    title: "Course Creation Failed",
    text: "Check the Details",
  });
};

const CreateCourse = () => {
  const to = useNavigate();
  const [isUploading, setIsUploading] = useState<boolean>();
  const [imageUrl, setImgurl] = useState<string | null>(null);
  const [_name, setname] = useState<any>(null);
  const [_credit, setCredit] = useState<any>(null);
  const [_type, setType] = useState<any>(null);
  const [_desc, setDesc] = useState<any>(null);

  const HandleSubmit = () => {
    if (!(imageUrl || _name || _credit || _type || _desc)) ErrorPopup();

    axios
      .post(`${import.meta.env.VITE_BACKEND_COURSE}/course/create`, {
        c_name: _name,
        c_description: _desc,
        c_credits: _credit,
        c_thumbnail: imageUrl,
        classification: _type == "0" ? "FREE" : _type,
        c_InstructorId: localStorage.getItem("ID"),
      })
      .then((data) => {
        if (data.status == 201) {
          localStorage.removeItem("CID");
          SucessCourseCreation();
          const C_id = data.data.data;
          console.log("Created Course : " + data.data.data);
          localStorage.setItem("CID", C_id);
          to("/course/modules", {
            state: {
              cid: C_id,
            },
          });
        }
      })
      .catch((err) => {
        console.error("Error in Creating Course \t" + err);
      });
  };

  return (
    <div className="flex w-screen h-screen pt-5 flex-col">
      <div className=" px-3">
        <NavBar />
      </div>
      <div className="w-full flex flex-col h-full py-5 bg-purple-900">
        <span className=" w-full flex underline justify-center text-white font-pop font-medium text-3xl">
          Create New Course
        </span>
        <div className=" grid grid-cols-6 w-full h-full">
          <section className=" w-full flex gap-5 flex-col  items-start col-span-3 mt-10 font-pop font-medium text-white text-2xl px-8">
            <section className=" w-full flex gap-4 items-start flex-col ">
              <span>Course Name</span>
              <input
                onChange={(e) => {
                  setname(e.currentTarget.value);
                }}
                type="text"
                className=" px-5 w-4/5 bg-transparent border-2 rounded-md border-purple-400"
              />
            </section>
            <section className=" w-full flex gap-4 items-start">
              <div className=" justify-start flex flex-col w-2/4 ">
                <span className=" flex justify-start">Total Credit</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className=" px-5 w-4/5 bg-transparent border-2 rounded-md border-purple-400"
                  onChange={(e) => {
                    setCredit(e.currentTarget.value);
                  }}
                />
              </div>
              <div className=" justify-start flex flex-col w-1/2 ">
                <Tooltip title={"Free or Paid"}>
                  <span className=" flex justify-start cursor-pointer">
                    Course Price
                  </span>
                </Tooltip>
                <input
                  onChange={(e) => {
                    setType(e.currentTarget.value);
                  }}
                  type="number"
                  min={0}
                  max={10000}
                  className=" px-5 w-3/5 bg-transparent border-2 rounded-md border-purple-400"
                />
              </div>
            </section>
            <section className=" w-full flex gap-4 items-start flex-col ">
              <span>Course Description</span>
              <textarea
                onChange={(e) => {
                  setDesc(e.currentTarget.value);
                }}
                rows={4}
                className=" w-4/5 bg-transparent border-2 rounded-md border-purple-400 resize-none"
              />
            </section>
            <section className=" w-full flex gap-4 items-start  text-lg ">
              <span>Upload Image</span>
              <input
                type="file"
                multiple={false}
                accept="image/*"
                onChange={async (e) => {
                  setIsUploading(true);
                  const File = e.target.files ? e.target.files[0] : null;
                  console.log(File);
                  const url = await ImageUploader({
                    foldername: "Course",
                    file: File!,
                  });
                  setImgurl(url);
                  setIsUploading(false);
                  if (url == null) {
                    alert("Not Image Uploaded ");
                  }
                }}
              />
              {isUploading && (
                <span>
                  <PuffLoader color="#36d7b7" size={30} />
                </span>
              )}
            </section>
            <section
              className={
                isUploading
                  ? "  hidden "
                  : "  w-full flex gap-4 items-end flex-col px-8"
              }
            >
              <div onClick={HandleSubmit}>
                <Btn color="#3b0764" textcolor="#ffffff" hovercolor="#a855f7">
                  <FiPlus color="#ffffff" />
                  <span className=" text-xl ">Create Course</span>
                </Btn>
              </div>
            </section>
          </section>
          <section className=" px-5 py-5 w-full col-span-3 font-pop font-medium text-white text-2xl flex items-center justify-center ">
            {/* <div className=" w-4/5 h-5/6 bg-purple-600"> */}
            <img
              className=" w-full h-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            {/* </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
