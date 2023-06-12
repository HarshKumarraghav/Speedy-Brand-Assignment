import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { BsClockHistory, BsStars } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";

type Props = {};

const Sidebar = ({}: Props) => {
  const menus = [
    {
      name: "Dashboard",
      link: `/`,
      icon: MdOutlineDashboard,
    },
    {
      name: "History",
      link: `/history`,
      icon: BsClockHistory,
    },
    {
      name: "Social",
      link: `/social`,
      icon: BsStars,
    },
    {
      name: "Profile",
      link: `/profile`,
      icon: AiOutlineUser,
    },
    {
      name: "Logout",
      link: `/logout`,
      icon: MdLogout,
      margin: true,
    },
  ];
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <section className="flex gap-6">
      <div
        className={`bg-white min-h-screen shadow-md ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-700 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? ` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 bg-primary text-white rounded-md`
                  : ` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-primary hover:text-white rounded-md`
              }
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 1}00ms`,
                }}
                className={`whitespace-pre duration-200 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
