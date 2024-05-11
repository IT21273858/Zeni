import { motion } from "framer-motion";
import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { FiKey, FiMail, FiPhone, FiUser, FiUsers } from "react-icons/fi";

const LoginComp = ({ click }: { click: any }) => {
  return (
    <motion.div
      initial={{
        width: "0%",
        height: "100%",
        opacity: 1,
        visibility: "visible",
        borderRadius: "0rem",
      }}
      className="bg-purple-500 flex rounded-2xl"
      animate={
        click == "LOGIN"
          ? {
            width: "100%",
            height: "100%",
            opacity: 1,
            visibility: "visible",
            borderRadius: "1rem",
            transition: {
              ease: "easeIn",
              stiffness: {
                type: "spring",
                stiffness: 1,
              },
              damping: 10,
              duration: 0.5,
            },
          }
          : {
            width: "0%",
            height: "100%",
            opacity: 0,
            visibility: "hidden",
            borderRadius: "1rem",
            transition: {
              ease: "easeOut",
              stiffness: {
                type: "spring",
                stiffness: 1,
              },
              damping: 10,
              duration: 0.5,
            },
          }
      }
    >
      <div className="flex w-full h-full flex-col">
        <section className="w-full font-Gro mt-5 justify-center items-center text-white underline-offset-4 underline text-2xl">
          LOGIN
        </section>
        <section className="w-full font-Gro mt-16 px-8 flex flex-col gap-7 justify-center items-center text-white ">
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent border border-white rounded-md px-4 text-xl py-3 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border border-white rounded-md px-4 text-xl py-3 w-full"
          />
          <input
            type="button"
            value={"Login"}
            className="bg-purple-400 border border-white rounded-md px-4 text-2xl font-sans font-semibold py-3 w-3/5"
          />
        </section>
      </div>
    </motion.div>
  );
};

const RegComp = ({ click }: { click: any }) => {
  const [_userType, _setUserType] = useState("STUDENT");
  const [displayForm, setDisplayForm] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    username: "",
    profile_img: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};


    if ((formData.fullname || formData.email || formData.password || formData.username) == null) {
      // setErrors(newErrors);
      console.log("Error null");

    } else {
      // Submit the form
      console.log("Form submitted successfully", formData);

    }
  };

  return (
    <motion.div
      initial={{
        width: "0%",
        height: "100%",
        opacity: 1,
        visibility: "hidden",
        borderRadius: "0rem",
      }}
      className="bg-purple-300 flex rounded-2xl"
      animate={
        click == "REG"
          ? {
            width: "100%",
            height: "100%",
            opacity: 1,
            visibility: "visible",
            borderRadius: "1rem",
            transition: {
              ease: "easeIn",
              stiffness: {
                type: "spring",
                stiffness: 1,
              },
              damping: 10,
              duration: 0.5,
            },
          }
          : {
            width: "0%",
            height: "100%",
            opacity: 0,
            visibility: "hidden",
            borderRadius: "1rem",
            transition: {
              ease: "easeOut",
              stiffness: {
                type: "spring",
                stiffness: 1,
              },
              damping: 10,
              duration: 0.5,
            },
          }
      }
    >
      <div className="flex w-full h-full flex-col px-5">
        <section className="w-full font-Gro mt-5 justify-center items-center underline-offset-4 underline text-2xl text-purple-900">
          REGISTER
        </section>
        {!displayForm && (
          <section className="w-full mt-12 flex flex-col justify-start items-start text-2xl text-purple-900">
            Select how you like to Continue,
            <section className="w-full mt-5 flex gap-5 justify-center">
              <span
                onClick={() => {
                  _setUserType("STUDENT");
                }}
                className="cursor-pointer rounded-md w-64 h-32 bg-purple-600 flex flex-col justify-center px-10 items-start py-6 gap-x-7 gap-y-2"
              >
                <input
                  type="radio"
                  className="scale-150"
                  checked={_userType == "STUDENT"}
                />
                <section className="text-2xl font-body font-bold text-white px-9">
                  STUDENT
                </section>
              </span>
              <span
                onClick={() => {
                  _setUserType("INSTRUCTOR");
                }}
                className="cursor-pointer rounded-md w-64 h-32 bg-purple-600 flex flex-col justify-center px-10 items-start py-6 gap-x-7 gap-y-2"
              >
                <input
                  type="radio"
                  className="scale-150"
                  checked={_userType == "INSTRUCTOR"}
                />
                <section className="text-2xl font-body font-bold text-white px-9">
                  INSTRUCTOR
                </section>
              </span>
              <span
                onClick={() => {
                  _setUserType("ADMIN");
                }}
                className="cursor-pointer rounded-md w-64 h-32 bg-purple-600 flex flex-col justify-center px-10 items-start py-6 gap-x-7 gap-y-2"
              >
                <input
                  type="radio"
                  className="scale-150"
                  checked={_userType == "ADMIN"}
                />
                <section className="text-2xl font-body font-bold text-white px-9">
                  ADMIN
                </section>
              </span>
            </section>
            <section className="w-full mt-5 px-4 flex justify-center items-center h-12">
              <div
                onClick={() => {
                  setDisplayForm(true);
                }}
                className="w-3/5 h-full flex justify-center items-center cursor-pointer bg-purple-900 rounded-lg text-white text-2xl"
              >
                Continue
              </div>
            </section>
          </section>
        )}
        {displayForm && (

          <div className=" h-[400px]  overflow-scroll">

            <form
              onSubmit={handleSubmit}
              className="w-full mt-2 flex flex-col justify-start items-start text-2xl text-purple-900 overflow-scroll"
            >
              <div className="flex w-full align-middle items-center gap-1">
                <FiUser size={"1.3rem"} />
                <label className="text-[#5e5c5c] font-serif text-[20px]">Full Name</label>
              </div>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Fullname"
                required
                className="bg-transparent border border-white rounded-3xl px-4 text-xl py-3 w-full"
              />

              <div className="flex w-full align-middle items-center gap-1 mt-2">
                <FiMail size={"1.3rem"} />
                <label className="text-[#5e5c5c] font-serif text-[20px]">Email</label>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-transparent border border-white rounded-3xl px-4 text-xl py-3 w-full"
              />

              <div className="flex w-full align-middle items-center gap-1 mt-2">
                <FiPhone size={"1.3rem"} />
                <label className="text-[#5e5c5c] font-serif text-[20px]">Phone</label>
              </div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="bg-transparent border border-white rounded-3xl px-4 text-xl py-3 w-full"
              />
              <div className="flex w-full align-middle items-center gap-1 mt-2">
                <FiKey size={"1.3rem"} />
                <label className="text-[#5e5c5c] font-serif text-[20px]">Password</label>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="bg-transparent border border-white rounded-3xl px-4 text-xl py-3 w-full"
              />
              <div className="flex w-full align-middle items-center gap-1 mt-2">
                <FiUsers size={"1.3rem"} />
                <label className="text-[#5e5c5c] font-serif text-[20px]">Username</label>


              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className="bg-transparent border border-white rounded-3xl px-4 text-xl py-3 w-full"
              />
              <div className="flex w-full align-middle items-center gap-1 mt-2">
                <FaIdCard size={"1.3rem"} />
                <label className="text-[#5e5c5c] font-serif text-[20px]">Profile Image</label>
              </div>
              <input
                type="file"
                name="profile_img"
                value={formData.profile_img}
                accept=".png,.jpeg"
                onChange={handleChange}
                className="bg-transparent border border-white rounded-full px-4 text-xl py-3 "
              />
              <div className="flex justify-end px-5 w-full m-2">
                <button type="submit" className="bg-purple-400 border border-white rounded-2xl px-4 text-2xl font-sans font-semibold py-2 ">Submit</button>
              </div>
            </form>

          </div>
        )}
      </div>
    </motion.div>
  );
};

const Login = () => {
  const [click, _click] = useState("LOGIN");
  return (
    <div className="grid grid-cols-6 w-screen h-screen">
      <section className="col-span-2 bg-purple-300 flex flex-col justify-center items-center px-6">
        <section className="text-9xl font-Vign text-purple-900">ZENI</section>
        <section className="text-3xl font-TT1 text-purple-900">
          Learn Something new and Build Your Career From Anywhere in The World
        </section>
      </section>

      {/* Form Section */}
      <section className="col-span-4 bg-purple-900 flex flex-col justify-center items-center">
        <div className="w-4/5 h-3/5 drop-shadow-xl grid grid-flow-col shadow-black bg-purple-300 bg-opacity-40 rounded-2xl">
          {click == "LOGIN" && <LoginComp click={click} />}
          {click == "REG" && <RegComp click={click} />}
        </div>

        <div className="w-4/5 px-5 h-3 mt-8 flex gap-3">
          <div
            className={
              click == "REG"
                ? "w-1/2 h-full bg-purple-800 rounded-full cursor-pointer hover:bg-purple-300"
                : "w-1/2 h-full bg-purple-600 rounded-full cursor-pointer hover:bg-purple-300"
            }
            onClick={() => {
              _click("LOGIN");
            }}
          ></div>
          <div
            className={
              click == "LOGIN"
                ? "w-1/2 h-full bg-purple-800 rounded-full cursor-pointer hover:bg-purple-300"
                : "w-1/2 h-full bg-purple-600 rounded-full cursor-pointer hover:bg-purple-300"
            }
            onClick={() => {
              _click("REG");
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Login;
