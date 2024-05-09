import { useLocation } from "react-router-dom";
import PurpleBtn from "./PurpleBtn";

const NavBar = () => {
  const { pathname } = useLocation();

  const navlinks = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "COURSES",
      link: "/courses",
    },
    {
      label: "ABOUT US",
      link: "/about",
    },
  ];

  return (
    <div className=" w-full h-20 flex border-b border-purple-500 items-center justify-between">
      <div className=" ">
        <div className=" flex text-purple-500">
          <span className=" text-6xl font-Vign  ">ZE</span>
          <span className=" text-6xl font-Vign ">NI</span>
        </div>
      </div>
      <div className=" flex gap-4">
        {navlinks.map((links, idx) => (
          <a href={links.link} key={idx}>
            <span
              className={
                links.link == pathname
                  ? "text-xl text-purple-700 font-bold underline underline-offset-4"
                  : "text-xl font-medium hover:underline underline-offset-4"
              }
            >
              {links.label}
            </span>
          </a>
        ))}

        <a href={"/login"}>
          <PurpleBtn>LOGIN</PurpleBtn>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
