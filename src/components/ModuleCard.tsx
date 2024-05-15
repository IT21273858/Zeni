import React from "react";
import { FiTrash } from "react-icons/fi";
import Btn from "./Btn";
import { Tooltip } from "@mui/material";

const ModuleCard = ({
  modname,
  modDesc,
  r_count,
  modtype,
}: {
  modname: string;
  modDesc: string;
  r_count: string;
  modtype: string;
}) => {
  return (
    <div className=" bg-purple-900 w-full h-60 rounded flex flex-col py-2 overflow-scroll">
      <span className=" font-pop font-semibold text-xl h-1/6">{modname}</span>
      <Tooltip title={"Your fairy godmother is her"}>
        <span className=" font-pop font-light text-xl line-clamp-3 h-4/6 px-4 w-full">
          {modDesc}
        </span>
      </Tooltip>
      <div className=" flex flex-col w-full h-full">
        <div className=" flex justify-between px-2 h-1/2 items-center font-pop">
          <div className=" w-1/2 h-1/2 flex">Resources Added : {r_count}</div>
          <div className="   flex pb-1">
            <Btn color="#10b981" textcolor="#ffffff" hovercolor="#047857">
              EDIT
            </Btn>
          </div>
        </div>
        <div className=" flex justify-between px-2 h-1/2 items-center font-pop">
          <div className="w-1/2 h-1/2 flex">TYPE : {modtype}</div>
          <div className=" flex pb-1">
            <Btn color="#9d174d" textcolor="#ffffff" hovercolor="#4c0519">
              DELETE
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
