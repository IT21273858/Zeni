import { ReactNode } from "react";

const DashCards = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className=" w-[520px] h-[420px] bg-purple-500 rounded-lg overflow-hidden">
      <div className=" w-full flex justify-start items-center px-6 h-16 border-b-4 border-white bg-purple-400 rounded-t-lg">
        <span className=" text-purple=950 text-2xl font-pop font-medium ">
          {title}
        </span>
      </div>
      <div className=" w-full h-full py-3 space-y-2 overflow-scroll ">
        {children}
      </div>
    </div>
  );
};

export default DashCards;
