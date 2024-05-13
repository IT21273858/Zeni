import { useLocation, useNavigate } from "react-router-dom";
import PurpleBtn from "./PurpleBtn";
import getTokenData from "./AuthHandler";
import NavDash from "./NavDash";
import { Avatar } from "@mui/material";

const NavBar = () => {
  const { pathname } = useLocation();
  const { TOKEN, ID, ROLE } = getTokenData();
  const to = useNavigate();

  const navlinksUsers = [
    {
      label: "DASHBOARD",
      link: "/dashboard",
    },
    {
      label: "COURSES",
      link: "/home",
    },
    {
      label: "ABOUT US",
      link: "/about",
    },
  ];

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

  return TOKEN ? (
    <div className=" w-full h-20 flex border-b border-purple-500 items-center justify-between">
      <div className=" ">
        <div className=" flex text-purple-500">
          <span className=" text-6xl font-Vign  ">ZE</span>
          <span className=" text-6xl font-Vign ">NI</span>
        </div>
      </div>
      <div className=" flex gap-4">
        {navlinksUsers.map((links, idx) => (
          <a href={links.link} key={idx}>
            <span
              className={
                links.link == pathname
                  ? "text-xl text-purple-800 font-bold underline underline-offset-4"
                  : "text-xl font-medium hover:underline underline-offset-4 text-purple-900"
              }
            >
              {links.label}
            </span>
          </a>
        ))}

        <div className=" flex cursor-pointer">
          <Avatar
            variant="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s"
            sx={{
              height: "40px",
              width: "40px",
            }}
          />
          <div
            onClick={() => {
              localStorage.removeItem("TOKEN");
              localStorage.removeItem("ROLE");
              localStorage.removeItem("ID");
              localStorage.removeItem("NAME");
              to("/");
            }}
            className=" cursor-pointer h-10 w-40 flex justify-center items-center text-xl rounded-r-md text-white bg-purple-500 font-pop font-medium"
          >
            Signout
          </div>
        </div>
      </div>
    </div>
  ) : (
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
