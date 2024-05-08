import { NavBar, PurpleBtn } from "../components";

const Home = () => {
  return (
    <div className=" flex w-screen h-screen pt-5 px-3 flex-col">
      <NavBar />
      <div className=" grid grid-cols-5 w-full h-1/2">
        <div className=" flex flex-col col-span-3 items-center justify-center gap-4 ">
          <div className=" w-full flex justify-end px-20">
            <div className=" border-dashed font-medium rounded-3xl py-2 px-3 border-2 w-fit text-xl border-purple-500">
              Education
            </div>
          </div>
          <span className=" text-3xl font-TT2 font-bold">
            Trusted LMS, serving learners worldwide, anytime, anywhere.
          </span>
          <div className=" flex">
            <input
              type="text"
              placeholder=" Email Address"
              className=" bg-transparent text-xl w-3/5 border border-purple-300 rounded-md py-1 px-2"
            />
            <div className=" text-xl py-1 px-3">
              <PurpleBtn>SIGN UP</PurpleBtn>
            </div>
          </div>
        </div>
        <div className="col-span-2  flex items-center justify-center">
          <div className=" w-3/5 h-4/5 bg-teal-400">
            <img
              className=" w-full h-full object-cover"
              src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-mobile-learning-mastering-online-education-and-e-learning-technology-on-smartphone-image_3912504.jpg"
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-96 bg-teal-100 ">{/* FeedBacks */}</div>
    </div>
  );
};

export default Home;
