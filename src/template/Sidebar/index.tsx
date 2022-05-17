import { Menu } from "antd";
import React, { useEffect, useRef } from "react";
import { FcLandscape, FcMoneyTransfer } from "react-icons/fc";
import { BsPersonPlus } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import Style from "./style";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}
function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode = 0 }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <Style className="lg:w-64">
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${"opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-70 flex-shrink-0 bg-gray-800 pt-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink to="/dashboard" className="block pl-4">
            <div>Dashboard</div>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <Menu mode="inline" className="sidebar-menu">
            <Menu.Item
              title="Earning"
              icon={<FcMoneyTransfer />}
              onClick={() => navigate("/admin/earning")}
            >
              Statistic Earning
            </Menu.Item>

            <Menu.Item
              title="Earning"
              icon={<FcLandscape />}
              onClick={() => navigate("/admin/vacation")}
            >
              Statistic Vacation
            </Menu.Item>

            <Menu.Item
              title="Earning"
              icon={<BsPersonPlus />}
              onClick={() => navigate("/admin/add-employee")}
            >
              Add A Employee
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Style>
  );
}

export default Sidebar;
