import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FiArrowLeft, FiLogOut, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import Btn from "../components/Btn";
import { ModuleCard, QuizCard, ResourceCard } from "../components";

const CreateModule = () => {
  const to = useNavigate();
  const [cliked, setclicked] = useState(false);
  const [modules, setModule] = useState("null");
  const [moduletype, setModuleType] = useState<string | null>(null);

  // Swil
  const [resource, setResource] = useState<File | string | null>(null);
  const [resourcetype, setResourceType] = useState<any>(null);

  const handleSelect = (e: SelectChangeEvent<string>) => {
    setModuleType(e.target.value);
  };

  const TopUp = () => {
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
    // Swal.bindClickHandler();

    Toast.fire({
      icon: "success",
      title: "Upload in successfully",
    });
  };

  const Popup = async () => {
    const { value: type } = await Swal.fire({
      title: "Select the Resource",
      input: "select",
      inputOptions: {
        image: "Image",
        pdf: "Pdf",
        document: "Document",
        video: "Video",
      },
      inputPlaceholder: "Select a Resource",
      showCancelButton: true,
    });

    setResourceType(type);

    if (type === "image") {
      const { value: image } = await Swal.fire({
        title: "upload an Image",
        input: "file",
        inputAttributes: {
          accept: "image/*",
          "aria-label": "Upload your profile picture",
        },
      });
      const file: File = image;
      setResource(file);
    } else if (type === "pdf") {
      const { value: pdf } = await Swal.fire({
        title: "upload a PDF file",
        input: "file",
        inputAttributes: {
          accept: ".pdf",
          "aria-label": "Upload your Pdf here",
        },
      });

      const file: File = pdf;
      setResource(file);
    } else if (type === "document") {
      const { value: doc } = await Swal.fire({
        title: "upload a  Document File",
        input: "file",
        inputAttributes: {
          accept: ".doc, .docx,",
          "aria-label": "Upload your Document here",
        },
      });

      const file: File = doc;
      setResource(file);
    } else if (type === "video") {
      const { value: url } = await Swal.fire({
        title: "Insert video url",
        input: "url",
        inputLabel: "Upload your Video Url here",
      });

      setResource(url);
    } else {
      if (type != undefined) Swal.fire("Please selected anything :)");
    }
  };

  const QuizPopup = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Create Quiz",
      html: `
      <label style="text-align:left;">Question 1</label>
        <input id="question" class="swal2-input">
      <label>Answer A</label>
      <input id="answerA" class="swal2-input">
      <label>Answer B</label>
      <input id="answerB" class="swal2-input">
      <label>Answer C </label>
      <input id="answerC" class="swal2-input">
      <label>Answer D </label>
      <input id="answerD" class="swal2-input">
      <br>
      <h1> Correct Answer </h1>
      <label for="a">A</label>
      <input type="radio" id="a" name="fav_language" value="A">
      <label for="b">B</label>
      <input type="radio" id="b" name="fav_language" value="B">
      <label for="c">C</label>
      <input type="radio" id="c" name="fav_language" value="C">
      <label for="d">D</label>
      <input type="radio" id="d" name="fav_language" value="D">
      <br>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const selectedValue = document.querySelector('input[name="fav_language"]:checked').value;
        const questionValue = document.getElementById("question").value;
        const answerValueA = document.getElementById("answerA").value;
        const answerValueB = document.getElementById("answerB").value;
        const answerValueC = document.getElementById("answerC").value;
        const answerValueD = document.getElementById("answerD").value;
        return {
          Question: questionValue,
          A: answerValueA,
          B: answerValueB,
          C: answerValueC,
          D: answerValueD,
          Correct: selectedValue
        };
      }
    });
    if (formValues) {
      console.log("hi", formValues);
      Swal.fire('Created!', 'Your Quiz Saved!', 'success')
    }
  };

  return (
    <div className=" flex w-screen h-screen   bg-purple-950  text-white overflow-hidden">
      <div className=" w-full h-full flex flex-col pt-5">
        {/*top Buttons */}
        <div className=" flex w-full justify-between px-10 mt-5">
          <div
            onClick={() => {
              to("/course/create");
            }}
            className=""
          >
            <Btn textcolor="#ffffff" color="#8b5cf6" hovercolor="#5b21b6">
              <FiArrowLeft color="#ffffff" size={"1rem"} />
              <span className=" text-lg"></span>
            </Btn>
          </div>
          <div
            onClick={() => {
              setclicked(true);
            }}
            className=""
          >
            <Btn textcolor="#ffffff" color="#8b5cf6" hovercolor="#5b21b6">
              <FiPlus color="#ffffff" size={"1rem"} />
              <span className=" text-base font-pop font-medium">
                Create Module
              </span>
            </Btn>
          </div>
        </div>
        {!modules && (
          <div className=" w-full h-full flex justify-center items-center ">
            No Modules Avaiable
          </div>
        )}
        {modules && (
          <div className=" w-full h-full flex flex-col justify-center items-center py-8 ">
            <div className=" w-11/12 h-full grid grid-cols-4 gap-4">
              <ModuleCard />
              <ModuleCard />
              <ModuleCard />
              <ModuleCard />
              <ModuleCard />
              <ModuleCard />
              <ModuleCard />
            </div>
            <div className=" w-full h-11/12 flex justify-end px-10">
              <div className=" text-lg font-semibold bg-purple-600 py-2 px-3 rounded cursor-pointer hover:bg-purple-800">
                Complete Course Creation
              </div>
            </div>
          </div>
        )}
      </div>
      {cliked && (
        <div className=" w-[520px] h-full bg-purple-900">
          {/* Backbar */}
          <div className=" w-full h-16 flex justify-end px-3">
            <section
              className=" bg-purple-950 mt-3 px-3 flex justify-center items-center rounded-lg cursor-pointer"
              onClick={() => {
                setclicked(false);
              }}
            >
              <FiLogOut color="#ffffff" size={"2rem"} />
            </section>
          </div>
          {/* Input */}
          <div className=" w-full h-full flex gap-5 flex-col justify-start mt-8 items-center text-xl">
            <input
              type="text"
              placeholder="Module Name"
              className=" w-4/5 px-4 py-1 rounded-md bg-transparent border-2 border-white"
            />
            <textarea
              rows={5}
              placeholder="Module Discription"
              className=" w-4/5 px-4 py-1 rounded-md bg-transparent border-2 border-white resize-none"
            />

            <FormControl
              className=" w-4/5"
              variant="standard"
              sx={{
                borderColor: "#ffffff",
                borderBottom: "1px solid white",
              }}
            >
              <InputLabel
                sx={{
                  color: "#ffffff",
                }}
              >
                Module Type
              </InputLabel>
              <Select
                label="Age"
                onChange={handleSelect}
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                }}
              >
                <MenuItem value={"Lesson"}>Lesson</MenuItem>
                <MenuItem value={"Quiz"}>Quiz</MenuItem>
                <MenuItem value={"Assignment"}>Assignment</MenuItem>
              </Select>
            </FormControl>

            {moduletype && (
              <>
                <div className=" w-full h-full flex flex-col">
                  {moduletype == "Lesson" && (
                    <div className=" w-full flex flex-col justify-end px-9">
                      <div
                        className=" text-base font-pop font-medium bg-purple-950 px-3 py-3 rounded-lg cursor-pointer hover:bg-purple-400"
                        data-swal-toast-template="#my-template"
                        onClick={() => {
                          Popup();
                        }}
                      >
                        Add Resource
                      </div>
                      <div className=" w-full mt-5 grid gap-y-3 h-52 overflow-scroll ">
                        <ResourceCard />
                        <ResourceCard />
                        <ResourceCard />
                      </div>
                      <div
                        className=" text-base font-pop font-medium bg-emerald-500 mt-10 px-3 py-3 rounded-lg cursor-pointer hover:bg-emerald-700"
                        data-swal-toast-template="#my-template"
                        onClick={() => { }}
                      >
                        ADD MODULE
                      </div>
                    </div>
                  )}
                  {moduletype == "Quiz" && (
                    <div className="w-full flex flex-col justify-end px-9">
                      <div
                        className=" text-base font-pop font-medium bg-purple-950 px-3 py-3 rounded-lg cursor-pointer hover:bg-purple-400"
                        data-swal-toast-template="#my-template"
                        onClick={() => {
                          QuizPopup();
                        }}
                      >
                        Add Quiz
                      </div>
                      <div className=" w-full mt-5 grid gap-y-3 h-52 overflow-scroll ">
                        <QuizCard />
                        <QuizCard />
                      </div>
                      <div
                        className=" text-base font-pop font-medium bg-emerald-500 mt-10 px-3 py-3 rounded-lg cursor-pointer hover:bg-emerald-700"
                        data-swal-toast-template="#my-template"
                        onClick={() => { }}
                      >
                        ADD MODULE
                      </div>
                    </div>
                  )}
                  {moduletype == "Assignment" && (
                    <div className="w-full flex flex-col justify-end px-9">
                      <div
                        className=" text-base font-pop font-medium bg-purple-950 px-3 py-3 rounded-lg cursor-pointer hover:bg-purple-400"
                        data-swal-toast-template="#my-template"
                        onClick={() => {
                          Popup();
                        }}
                      >
                        Add Resource
                      </div>
                      <div className=" w-full mt-5 grid gap-y-3 h-52 overflow-scroll ">
                        <ResourceCard />
                        <ResourceCard />
                        <ResourceCard />
                      </div>
                      <div
                        className=" text-base font-pop font-medium bg-emerald-500 mt-10 px-3 py-3 rounded-lg cursor-pointer hover:bg-emerald-700"
                        data-swal-toast-template="#my-template"
                        onClick={() => { }}
                      >
                        ADD MODULE
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateModule;
