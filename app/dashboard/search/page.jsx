import React from "react";

const page = () => {
  return (
    <div className="container h-screen overflow-y-scroll">
      <div className="col-span-3 mt-5 text-white bg-[#386BF6] rounded-[10px] p-5">
        <h4 className=" text-[36px] mt-5 mb-5">
          Get Doctors Recommendations by Symptoms Checker
        </h4>

        <button className="py-2 px-5 bg-transparent hover:bg-white hover:text-[#386BF6] transition duration-100 border-1 border-white rounded-[10px]">
          Detect Dierese
        </button>
      </div>
      <div className="mb-5">
        <div className="flex mt-5 gap-5">
          <input
            type="text"
            placeholder="Search Doctor"
            className="px-3 py-3 border-1 transition duration-200 focus:focus:border-[#386BF6] focus:outline-none  w-full border-gray-400 rounded-[10px]"
            id=""
          />
          <button className="px-20  py-3 bg-[#386BF6] text-white rounded-[10px] ">
            Search
          </button>
        </div>
      </div>
      <div className="flex gap-5 w-full ">
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
        <div>
          <img src="/icons/1.png" height={200} width={200} alt="" />
          <p className="font-light text-center mt-2 text-2xl"> Pediatrician</p>
        </div>
      </div>
    </div>
  );
};

export default page;
