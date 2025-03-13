import React from "react";

const Navbar = () => {
  return (
    <div className="py-6 bg-[#386BF6] fixed top-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h5 className="text-[30px] font-bold text-white">TELECURE</h5>
          <ul className=" gap-10 hidden lg:flex">
            <li>
              <a
                href="#"
                className="text-[20px] font-semibold text-white hover:text-black"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] font-semibold text-white hover:text-black"
              >
                Consultations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] font-semibold text-white hover:text-black"
              >
                Diease Detection
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] font-semibold text-white hover:text-black"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] font-semibold text-white hover:text-black"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button className="px-8 py-4 hidden lg:block bg-[#386BF6] tracking-widest uppercase font-medium font text-white border-white border-1 transition-[0.3s] hover:text-[#386BF6]  hover:bg-white rounded-sm ">
            Register Now
          </button>
          <button className="px-4 py-2 lg:hidden  bg-[#386BF6] tracking-widest uppercase font-medium font text-white border-white border-1 transition-[0.3s] hover:text-[#386BF6]  hover:bg-white rounded-sm ">
            <img
              src="./bar.png"
              className=""
              alt=""
              height={"40px"}
              width={"40px"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
