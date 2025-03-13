import React from "react";

const AppBar = () => {
  return (
    <div className="w-full  fixed bottom-0 lg:hidden">
      <ul className="flex bg-white py-6 px-4 justify-around relative ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li className="absolute top-[-50%] ">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#613EEA]  z-10 shadow-purple-300 shadow-md">
            <a href="#">
              <img src="./mic.png" alt="" />
            </a>
          </div>
        </li>
        <li>
          <a href="#">Schedule</a>
        </li>
        <li>
          <a href="#">User</a>
        </li>
      </ul>
    </div>
  );
};

export default AppBar;
