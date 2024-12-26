import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  const { pathname } = useLocation();

  const [sidebarToggle, setSidebarToggle] = useState(false);
  const title = pathname
    .split("/")
    .slice(1)
    .map((segment) => decodeURIComponent(segment))
    .join(" ")
    .replace(/-/g, " ")
    .toUpperCase();

  return (
    <main className="bg-[#E5E5E5] bg-opacity-40 flex relative w-full h-full min-h-dvh">
      <Sidebar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="flex flex-col relative w-full h-full overflow-x-hidden">
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="flex-1 overflow-x-hidden">
          <div className="relative flex flex-col pt-4 pb-8 px-6 w-full h-full overflow-x-hidden">
            <div
              className={` flex-1 overflow-x-hidden font-text ${
                sidebarToggle ? "ml-[4rem]" : "ml-[12rem]"
              } transition-all duration-300py-4 mb-5 w-full capitalize text-[#030229] text-[24px] font-bold text-opacity-100 font-text`}
            >
              {title}
            </div>
            <div
              className={`flex-1 overflow-x-hidden font-text ${
                sidebarToggle ? "ml-[4rem]" : "ml-[12rem]"
              } transition-all duration-300 `}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
