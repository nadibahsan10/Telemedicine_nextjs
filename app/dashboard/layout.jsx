"use client";
import React from "react";
import "./dashboard.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="h-screen bg-[#386BF6]  py-40">
          <img
            src="/next.svg"
            className="block mx-auto"
            height={150}
            width={300}
            alt=""
          />
          <ul className="mt-20">
            <li>
              <Link
                className={`block py-4 text-2xl text-center ${
                  pathname === "/dashboard/home" ? "active" : ""
                }`}
                href="/dashboard/home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`block py-4 text-2xl text-center ${
                  pathname === "/dashboard/search" ? "active" : ""
                }`}
                href="/dashboard/search"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                className={`block py-4 text-2xl text-center ${
                  pathname === "/dashboard/appointment" ? "active" : ""
                }`}
                href="/dashboard/appointment"
              >
                Appointments
              </Link>
            </li>
            <li>
              <Link
                className={`block py-4 text-2xl text-center ${
                  pathname === "/dashboard/profile" ? "active" : ""
                }`}
                href="/dashboard/profile"
              >
                User Profile
              </Link>
            </li>
            <li>
              <Link
                className={`block py-4 text-2xl text-center ${
                  pathname === "/dashboard/settings" ? "active" : ""
                }`}
                href="/dashboard/settings"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className=" block py-4 hover:bg-white hover:text-black bg-red-800 text-white text-2xl text-center"
                href="/dashboard"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3 ">{children}</div>
      </div>
    </div>
  );
};

export default layout;
