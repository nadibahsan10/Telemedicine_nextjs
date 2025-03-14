import React from "react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="h-screen bg-[#386BF6] py-40">
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
                className=" block py-4 bg-white text-2xl text-center"
                href="/dashboard"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className=" block py-4 hover:bg-white hover:text-black text-white text-2xl text-center"
                href="/dashboard"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                className=" block py-4 hover:bg-white hover:text-black text-white text-2xl text-center"
                href="/dashboard"
              >
                Appointments
              </Link>
            </li>
            <li>
              <Link
                className=" block py-4 hover:bg-white hover:text-black text-white text-2xl text-center"
                href="/dashboard"
              >
                User Profile
              </Link>
            </li>
            <li>
              <Link
                className=" block py-4 hover:bg-white hover:text-black text-white text-2xl text-center"
                href="/dashboard"
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
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default layout;
