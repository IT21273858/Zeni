import { Avatar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const navlinks = [
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
const NavDash = () => {
  const { pathname } = useLocation();
  const to = useNavigate();
  return (
    <div className=" w-full flex flex-col justify-center">
      <div className=" flex gap-4 w-full justify-end px-6">
        {navlinks.map((links, idx) => (
          <a href={links.link} key={idx}>
            <span
              className={
                links.link == pathname
                  ? "text-xl text-purple-400 font-bold underline underline-offset-4"
                  : "text-xl font-medium hover:underline underline-offset-4 text-white"
              }
            >
              {links.label}
            </span>
          </a>
        ))}
        <div className=" flex">
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
      <div className="  ">
        <div className="  text-purple-300 mt-10">
          <span className=" text-8xl font-Vign  ">ZENI</span>
        </div>
      </div>
    </div>
  );
};

export default NavDash;
