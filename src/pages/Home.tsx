import { useNavigate } from "react-router-dom";
import { NavBar, PurpleBtn } from "../components";
import Btn from "../components/Btn";

const Home = () => {
  const to = useNavigate();

  return (
    <div className=" flex w-screen h-screen pt-5 px-3 flex-col">
      <NavBar />

      <div className=" grid w-full h-full grid-cols-5 font-poet text-purple-900">
        <section className=" w-full  h-full flex flex-col justify-start px-8 text-left items-start col-span-3">
          <span className=" text-3xl mt-40 w-full">
            Start a journey of discovery with our varied courses. From coding to
            cooking, there's something for everyone. Expand your potential!
          </span>
          <div className=" w-full flex justify-end ">
            <span
              className=" text-3xl  mt-10 w-3/5  font-pop"
              onClick={() => {
                to("/login");
              }}
            >
              <Btn
                textcolor={"#ffffff"}
                color={"#3b0764"}
                hovercolor={"#6b21a8"}
              >
                Register Now
              </Btn>
            </span>
          </div>
        </section>
        <section className=" w-full h-full   col-span-2 rounded-3xl ">
          <img
            className=" w-full h-full object-contain rounded-3xl"
            src="/bg.png"
          />
        </section>
      </div>
      {/* <div className=" grid grid-cols-5 w-full h-full">
        <div className=" flex flex-col col-span-3 items-center justify-center gap-4 ">
          <div className=" w-full flex justify-end px-20"></div>
          <span className=" text-3xl font-pop font-medium flex items-center justify-center">
            <span className=" w-3/5 flex">
              Explore limitless learning options. Tailored courses. Accessible
              education. Begin your journey now.
            </span>
          </span>
          <div className=" flex">
            <div className=" text-xl py-1 px-3">
              <PurpleBtn>Signup</PurpleBtn>
            </div>
          </div>
        </div>
        <div className="col-span-2  flex items-center justify-center">
          <div className=" w-3/5 h-full bg-teal-400">
            <img
              className=" w-full h-full object-cover"
              src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-mobile-learning-mastering-online-education-and-e-learning-technology-on-smartphone-image_3912504.jpg"
            />
          </div>
        </div>
      </div> */}
      {/* <div className=" w-full h-96  flex justify-start items-center">
        <div className=" w-2/5 h-full rounded-xl ">
          <img
            className=" w-full h-full object-cover rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG46Yqlp17nJZpuH-lDf4T0O4VkKMG30DwAVxHibMkNA&s"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
