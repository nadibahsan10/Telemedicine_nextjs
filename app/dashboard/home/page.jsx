import React from "react";

const page = () => {
  return (
    <div className="container h-screen overflow-y-scroll ">
      <div className="pt-5">
        <h2 className="text-5xl mb-2 font-semibold text-[#094067]">Welcome,</h2>
        <h6 className="mb-4 text-2xl text-[#094067]">MD Nadib Ahsan</h6>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 text-white bg-[#386BF6] rounded-[10px] p-5">
            <h6 className="">30 doctors available</h6>
            <h4 className=" text-[36px] mb-5">
              Get free <span>consultation for new</span> users
            </h4>

            <button className="py-2 px-5 bg-transparent hover:bg-white hover:text-[#386BF6] transition duration-100 border-1 border-white rounded-[10px]">
              Find a doctor
            </button>
          </div>
          <h5 className="text-2xl col-span-3 mt-10 text-[#094067]">Features</h5>
          <div className="text-white bg-[#386BF6] rounded-[10px] p-5">
            <img
              src="/icons/ai.png"
              height={100}
              width={100}
              className="mb-4"
              alt=""
            />
            <h6 className="text-2xl">AI Symptoms Checker</h6>
          </div>
          <div className="text-white bg-[#386BF6] rounded-[10px] p-5">
            <img
              src="/icons/dp.png"
              height={100}
              width={100}
              className="mb-4"
              alt=""
            />
            <h6 className="text-2xl">Online Consultations</h6>
          </div>
          <div className="text-white bg-[#386BF6] rounded-[10px] p-5">
            <img
              src="/icons/oc.png"
              height={100}
              width={100}
              className="mb-4"
              alt=""
            />
            <h6 className="text-2xl">Digital Prescriptions</h6>
          </div>
          <h5 className="text-2xl col-span-3 mt-10 text-[#094067]">
            Popular Specialist
          </h5>
          <div className="bg-[#F1F1F1] hover:scale-[1.05] transition duration-200 rounded-[10px] p-5 flex gap-4">
            <img src="/icons/doc profile.png" alt="" height={100} width={100} />
            <div className="flex flex-col justify-between">
              <h4 className="font-bold text-[24px]">Dr. John Doe </h4>
              <p className="font-medium text-[#8696BB]">Dermatologist</p>
              <div className="flex gap-2.5 items-center">
                <img src="/icons/stars.png" height={24} width={150} alt="" />
                <p className="font-bold text-2xl">4.8</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1F1] hover:scale-[1.05] transition duration-200 rounded-[10px] p-5 flex gap-4">
            <img src="/icons/doc profile.png" alt="" height={100} width={100} />
            <div className="flex flex-col justify-between">
              <h4 className="font-bold text-[24px]">Dr. John Doe </h4>
              <p className="font-medium text-[#8696BB]">Dermatologist</p>
              <div className="flex gap-2.5 items-center">
                <img src="/icons/stars.png" height={24} width={150} alt="" />
                <p className="font-bold text-2xl">4.8</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1F1] hover:scale-[1.05] transition duration-200 rounded-[10px] p-5 flex gap-4">
            <img src="/icons/doc profile.png" alt="" height={100} width={100} />
            <div className="flex flex-col justify-between">
              <h4 className="font-bold text-[24px]">Dr. John Doe </h4>
              <p className="font-medium text-[#8696BB]">Dermatologist</p>
              <div className="flex gap-2.5 items-center">
                <img src="/icons/stars.png" height={24} width={150} alt="" />
                <p className="font-bold text-2xl">4.8</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1F1] hover:scale-[1.05] transition duration-200 rounded-[10px] p-5 flex gap-4">
            <img src="/icons/doc profile.png" alt="" height={100} width={100} />
            <div className="flex flex-col justify-between">
              <h4 className="font-bold text-[24px]">Dr. John Doe </h4>
              <p className="font-medium text-[#8696BB]">Dermatologist</p>
              <div className="flex gap-2.5 items-center">
                <img src="/icons/stars.png" height={24} width={150} alt="" />
                <p className="font-bold text-2xl">4.8</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1F1] hover:scale-[1.05] transition duration-200 rounded-[10px] p-5 flex gap-4">
            <img src="/icons/doc profile.png" alt="" height={100} width={100} />
            <div className="flex flex-col justify-between">
              <h4 className="font-bold text-[24px]">Dr. John Doe </h4>
              <p className="font-medium text-[#8696BB]">Dermatologist</p>
              <div className="flex gap-2.5 items-center">
                <img src="/icons/stars.png" height={24} width={150} alt="" />
                <p className="font-bold text-2xl">4.8</p>
              </div>
            </div>
          </div>{" "}
          <div className="bg-[#F1F1F1] hover:scale-[1.05] transition duration-200 rounded-[10px] p-5 flex gap-4">
            <img src="/icons/doc profile.png" alt="" height={100} width={100} />
            <div className="flex flex-col justify-between">
              <h4 className="font-bold text-[24px]">Dr. John Doe </h4>
              <p className="font-medium text-[#8696BB]">Dermatologist</p>
              <div className="flex gap-2.5 items-center">
                <img src="/icons/stars.png" height={24} width={150} alt="" />
                <p className="font-bold text-2xl">4.8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
