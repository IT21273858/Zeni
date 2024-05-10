import { useLocation } from "react-router-dom";
const navlinks = [
  {
    label: "DASHBOARD",
    link: "/dashboard",
  },
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
const NavDash = () => {
  const { pathname } = useLocation();
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
