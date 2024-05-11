import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const SingleQuiz = ({}: {
  Qnum: string;
  Question: string;
  OptA: string;
  OptB: string;
  OptC: string;
  OptD: string;
}) => {
  return (
    <div className=" w-full  flex flex-col bg-purple-900 rounded-lg border-2 border-white">
      <div className=" text-base font-pop h-1/4 font-medium w-full line-clamp-2 text-left px-2 py-2">
        1. What's your power color?
      </div>
      <div className=" flex flex-col text-lg h-3/4  font-pop font-medium w-full line-clamp-2 text-left px-2 py-2">
        <RadioGroup
          onChange={(e) => {
            console.log(e.currentTarget.value);
          }}
        >
          <section className=" w-full h-1/2 flex justify-between px-5">
            <div className=" font-light font-base">
              <Radio
                value={"A"}
                sx={{
                  color: "#a855f7",
                }}
              />
              A. RED
            </div>
            <div className=" font-light font-base ">
              <Radio
                value={"B"}
                sx={{
                  color: "#a855f7",
                }}
              />
              B. BLUE
            </div>
          </section>
          <section className=" w-full h-1/2 flex justify-between px-5">
            <div className=" font-light font-base">
              <Radio
                value={"C"}
                sx={{
                  color: "#a855f7",
                }}
              />
              C. RED
            </div>
            <div className=" font-light font-base">
              <Radio
                value={"D"}
                sx={{
                  color: "#a855f7",
                }}
              />
              D. YELLOw
            </div>
          </section>
        </RadioGroup>
      </div>
    </div>
  );
};

export default SingleQuiz;
