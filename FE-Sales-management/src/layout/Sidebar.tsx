import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiInvoiceLight } from "react-icons/pi";
import { BiMessageAltDetail } from "react-icons/bi";
import { TbBellRinging } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import CroppedProductLogo from "../assets/Logo and company - Cropped.png";

interface SidebarProps {
  sidebarToggle: boolean;
  setSidebarToggle: (toggle: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  const role = "user";
  return (
    <motion.div
      animate={{ width: sidebarToggle ? "4rem" : "12rem" }}
      transition={{ type: "tween", stiffness: 300 }}
      className={`fixed flex flex-col justify-between bg-white shadow-lg bg-opacity-90 min-h-screen left-0 top-0 overflow-hidden z-50 font-text text-opacity-50 font-bold`}
    >
      <motion.div
        className={`fixed z-999 w-auto top-[78px]  bg-saas-primary shadow-xl rounded-lg`}
        animate={{ x: sidebarToggle ? "3rem" : "10.5rem" }}
        transition={{ type: "tween", stiffness: 300 }}
      >
        <motion.div>
          {sidebarToggle ? (
            <motion.div
              key={"right-arrow"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdOutlineKeyboardArrowRight
                size={30}
                className="text-white cursor-pointer p-1 overflow-x-auto"
                onClick={() => setSidebarToggle(!sidebarToggle)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={"left-arrow"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdOutlineKeyboardArrowLeft
                size={30}
                className="text-white cursor-pointer p-1 overflow-x-auto"
                onClick={() => setSidebarToggle(!sidebarToggle)}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <div className="overflow-y-auto flex-grow py-2 h-full">
        <div className=" border-b border-slate-300 px-2 py-3">
          <div className="flex cursor-pointer items-center justify-between">
            <div className="flex flex-row w-full gap-3 items-center h-[60px]">
              <motion.div
                key={`logo-icon`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.325, type: "spring" }}
                className="grid shrink-0 place-content-center"
              >
                <img src={CroppedProductLogo} alt="Logo" />
              </motion.div>
              {!sidebarToggle && (
                <motion.div
                  key={`logo-text`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.125 }}
                  className="flex flex-col"
                >
                  <span className=" text-sm font-bold  text-slate-500">
                    System Management
                  </span>
                  <span className=" text-xl font-bold text-saas-primary">
                    Sales
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <ul className="text-gray-500 h-5/6 py-6">
          {role === "user" && (
            <>
              <NavItem
                to="/dashboard"
                icon={<TbLayoutDashboardFilled className="text-[16px]" />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">Dashboard</span>
              </NavItem>

              <NavItem
                to="/analytics"
                icon={<MdOutlineAnalytics width={20} height={20} />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">Analytics</span>
              </NavItem>
              <NavItem
                to="/invoice"
                icon={<PiInvoiceLight width={20} height={20} />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">Invoice</span>
              </NavItem>
              <NavItem
                to="/schedule"
                icon={<PiNotepad width={20} height={20} />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">Schedule</span>
              </NavItem>
              <NavItem
                to="/calendar"
                icon={<FaRegCalendarAlt width={20} height={20} />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">Calendar</span>
              </NavItem>
              <NavItem
                to="/messages"
                icon={<BiMessageAltDetail width={20} height={20} />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">Messages</span>
              </NavItem>
              <NavItem
                to="/notifications"
                icon={<TbBellRinging width={20} height={20} />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">
                  Notification
                </span>
              </NavItem>
              <NavItem
                to="/setting"
                icon={<IoSettingsOutline width={20} height={20} />}
                sidebarToggle={sidebarToggle}
              >
                <span className="text-[16px] text-opacity-50">Settings</span>
              </NavItem>
            </>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  sidebarToggle: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  children,
  sidebarToggle,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 mb-4 rounded py-2 flex items-center text-[16px] ${
          isActive
            ? "text-saas-primary bg-gradient-to-r from-saas-primary/20 via-saas-primary/10 to-transparent"
            : "text-slate-500"
        }`
      }
    >
      {({ isActive }) => (
        <li
          className={`flex items-center ${
            isActive ? "text-saas-primary" : "text-slate-500"
          }`}
        >
          {React.cloneElement(icon, {
            className: `${icon.props.className} ${
              isActive ? "text-saas-primary" : "text-slate-500"
            }`,
          })}
          {!sidebarToggle && <span className="ml-4">{children}</span>}
        </li>
      )}
    </NavLink>
  );
};

export default Sidebar;
