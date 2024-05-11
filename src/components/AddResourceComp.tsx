import React from "react";

const AddResourceComp = () => {
  return (
    <div className=" w-full bg-purple-500 h-20 grid rounded-lg grid-cols-6 border-2 border-white">
      <section className=" col-span-2 bg-purple-900 h-full w-full py-0.5 rounded-lg">
        <img
          src="https://fastly.picsum.photos/id/722/536/354.jpg?hmac=QaAYaX-ssxft_kuUgNOTsTdgvlRBhEW6iW2Gl2IhHag"
          alt=""
          className=" w-full h-full object-cover"
        />
      </section>
      <section className=" col-span-4 flex flex-col items-end px-2 py-2 bg-purple-950 text-left">
        <span className=" text-xl font-pop font-medium text-left">Name</span>
        <span className=" text-base font-pop font-light text-left">Type</span>
      </section>
    </div>
  );
};

export default AddResourceComp;
