import { ReactNode } from "react";

const PurpleBtn = ({ children }: { children: ReactNode }) => {
  return (
    <span className=" cursor-pointer text-xl font-pop font-semibold text-white font-medium hover:bg-purple-700 bg-purple-500 py-2 px-3 rounded-md">
      {children}
    </span>
  );
};

export default PurpleBtn;
