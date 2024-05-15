import { FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import ReactPlayer from "react-player";
import Btn from "../components/Btn";

const VideoPlayer = ({ title, url }: { title: string; url: string }) => {
  return (
    <>
      <div className=" w-full flex flex-col px-10 mt-8">
        <span className=" text-left text-xl font-pop font-semibold mb-5 flex gap-3 items-center">
          <FiShoppingBag size={"1.3rem"} />
          {title}
        </span>
        <ReactPlayer
          controls={true}
          url={url}
          fallback={<>Loading</>}
          height={720}
          width={1280}
        />
      </div>
    </>
  );
};
const Documents = ({ title, link }: { title: string; link: string }) => {
  return (
    <>
      <div className=" w-full flex flex-col px-10 mt-8">
        <span className=" text-left text-xl font-pop font-semibold mb-5 flex gap-3 items-center">
          <FiShoppingBag size={"1.3rem"} />
          {title}
        </span>
        <div className=" w-52 h-44 bg-transparent rounded">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/182px-PDF_file_icon.svg.png"
            className=" w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};
const Images = ({ title, url }: { title: string; url: string }) => {
  return (
    <>
      <div className=" w-full flex flex-col px-10 mt-8">
        <span className=" text-left text-xl font-pop font-semibold mb-5 flex gap-3 items-center">
          <FiShoppingBag size={"1.3rem"} />
          {title}
        </span>
        <div className=" w-52 h-44 bg-purple-500 rounded">
          <img src={url} className=" w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

const Lesson = () => {
  return (
    <div className="flex w-screen h-screen pt-10 flex-col bg-purple-950 text-white overflow-scroll">
      {/* title */}
      <div className="w-full flex px-8  justify-between">
        <div className="flex gap-3">
          <FiArrowLeft
            size={"3rem"}
            className=" bg-purple-800 px-2 py-1 hover:bg-purple-900"
          />
          <span className=" text-5xl font-pop font-semibold  ">
            MODULE TITLE
          </span>
        </div>
        <div className=" text-xl">
          <Btn color="#ec4899" textcolor="#ffffff" hovercolor="#9d174d">
            Mark as Done
          </Btn>
        </div>
      </div>

      <div className=" w-3/5 mt-10 px-8 text-xl font-pop font-medium flex">
        Module Description
      </div>
      <div className=" w-4/5 text-left mt-2 px-8 text-xl font-pop font-light flex">
        A modular design can be characterized by functional partitioning into
        discrete scalable and reusable modules, rigorous use of well-defined
        modular interfaces, and making use of industry standards for interfaces.
        In this context modularity is at the component level, and has a single
        dimension, component slottability. A modular system with this limited
        modularity is generally known as a platform system that uses modular
        components. Examples are car platforms or the USB port in computer
        engineering platforms.
      </div>
      <div className=" font-xl text-left px-8 text-2xl font-pop font-semibold mt-8 underline-offset-4 underline">
        Study Materials
      </div>
      <div className=" w-full grid gap-6">
        <div className=" w-4/5 grid grid-flow-col overflow-scroll">
          <Documents title="Name of Doc" link="" />
          <Images
            url="https://fastly.picsum.photos/id/338/536/354.jpg?hmac=GM18LpV1PFucRDBp1wYO81AR70GZk0ZfdXYJ6I9B9a4"
            title="Image came"
          />
          <Documents title="" link="" />
          <Documents title="" link="" />
          <Images
            url="https://images.pexels.com/photos/10643964/pexels-photo-10643964.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Frozen calkls"
          />
        </div>
        <VideoPlayer
          url="https://youtu.be/41W7sRc5wps?si=6DfMn0BppPuJ0DfQ"
          title="Video of Lession 1"
        />
      </div>
    </div>
  );
};

export default Lesson;
