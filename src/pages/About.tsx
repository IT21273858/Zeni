import React from "react";
import { NavBar } from "../components";
import { FiCheckCircle } from "react-icons/fi";

const About = () => {
  return (
    <div className=" flex w-screen h-screen pt-5 px-3 flex-col">
      <NavBar />
      <div className=" grid grid-cols-5 w-full h-full">
        <div className="flex col-span-2 justify-center items-center px-5 py-16">
          <img
            src="https://media.istockphoto.com/id/1396113348/vector/3d-web-vector-illustrations-online-concept-computer-with-open-pages-e-learning-design-over.jpg?s=612x612&w=0&k=20&c=UuGSBpij7N-sZLRU-akf97-k7EexWmKgv15EgeApRy0="
            className=" w-full h-full object-fill rounded-xl"
          />
        </div>
        <div className="flex col-span-3 justify-center items-center flex-col">
          <span className="  text-5xl">
            Welcome to <span className=" text-purple-500 font-Vign">ZENI</span>
          </span>
          <span className=" text-3xl font-light">
            Zeni is a dynamic online learning platform dedicated to providing
            accessible education worldwide.
          </span>
          <div className="flex w-full justify-between flex-col px-36 mt-10 gap-4">
            <div className=" flex w-full">
              <FiCheckCircle
                size={"2em"}
                color="#6132AF"
                className=" border-2"
              />
              <span className=" text-xl font-medium font-Gro">
                Offering a diverse range of high-quality courses tailored to
                individual learning needs.
              </span>
            </div>
            <div className=" flex w-full">
              <FiCheckCircle
                size={"2em"}
                color="#6132AF"
                className=" border-2"
              />
              <span className=" text-xl font-medium font-Gro">
                Offering a diverse range of high-quality courses tailored to
                individual learning needs.
              </span>
            </div>
            <div className=" flex w-full">
              <FiCheckCircle
                size={"2em"}
                color="#6132AF"
                className=" border-2"
              />
              <span className=" text-xl font-medium font-Gro">
                Prioritizing inclusivity, innovation, and excellence in every
                aspect of our platform.
              </span>
            </div>
            <div className=" flex w-full">
              <FiCheckCircle
                size={"2em"}
                color="#6132AF"
                className=" border-2"
              />
              <span className=" text-xl font-medium font-Gro">
                Transforming lives through education by fostering lifelong
                learning and skill development
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
