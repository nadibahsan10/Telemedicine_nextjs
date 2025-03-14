import React from "react";
import "../auth.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[#ffffff] px-15 py-12 mx-auto self-center rounded-[10px]">
      <h1 className="text-2xl text-center font-bold mb-6">Login</h1>
      <div className="mb-5">
        <div className="relative">
          <input
            type="text"
            name="username"
            placeholder="Email or username"
            id="username"
          />
        </div>
      </div>
      <div className="mb-10">
        <div className="relative flex flex-col">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          />
          <Link href="/" className="block mt-2 self-end text-gray-500">
            Forgot password?
          </Link>
        </div>
      </div>
      <button className="login-btn block mx-auto py-3 px-11 w-full  bg-[#29BDBF] rounded-[10px] border-none text-white">
        Login
      </button>
      <h6 className="text-[16px] text-gray-600 text-center  my-10">
        Or Sign Up Using
      </h6>
      <div className="flex h-[40px] justify-center gap-4">
        <img src="/icons/facebook.png" alt="" />
        <img src="/icons/google.png" alt="" />
        <img src="/icons/face.svg" alt="" />
      </div>

      <Link
        className="mt-[100px] font-bold block text-center"
        href="/auth/register"
      >
        Register
      </Link>
    </div>
  );
};

export default page;
