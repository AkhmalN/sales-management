// import React from "react";
// import { FaBell } from "react-icons/fa";
// import { IoSettingsSharp } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: (toggle: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useAuth();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <nav className="h-[80px] px-4 py-3 flex justify-between items-center w-full right-0 top-0 z-30 font-text">
      <div className="flex justify-end w-full items-center text-xl">
        <div
          className={`relative flex justify-between gap-2 p-1 rounded-full h-10 cursor-pointer bg-white shadow-lg`}
          onClick={handleOpenMenu}
        >
          <span className="font-semibold text-slate-500 text-sm flex items-center mx-2 ">
            {user?.username}
          </span>
          <div className="flex justify-center p-1 rounded-full h-8 w-8">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://tse4.mm.bing.net/th?id=OIP.lMlHgYqDecrHydBKfr44pQHaHa&pid=Api&P=0&h=220"
              alt=""
            />
          </div>

          {openMenu ? (
            <BiCaretDown className="self-center mr-2 text-gray-600" />
          ) : (
            <BiCaretRight className="self-center mr-2 text-gray-600" />
          )}
          {openMenu && (
            <motion.div
              className="inline-flex gap-2 items-center absolute top-11 right-0 rounded-lg p-2 bg-white border w-40"
              animate={{ y: 0 }}
              initial={{ y: -10 }}
              onClick={handleLogout}
            >
              <CgLogOut className="text-red-500 rotate-180" />
              <span className="text-red-600 text-[14px] font-semibold">
                Logout
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
