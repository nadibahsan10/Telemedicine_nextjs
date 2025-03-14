import React from "react";
import "../auth.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[#ffffff] px-15 py-12 mx-auto self-center rounded-[10px]">
      <h1 className="text-2xl text-center font-bold mb-6">Register</h1>
      <div className="mb-5">
        <div className="relative">
          <input
            type="text"
            name="username"
            placeholder="Full name"
            id="username"
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            id="username"
          />
        </div>
      </div>
      <div className="mb-5">
        <input type="phone" name="number" placeholder="Mobile number" />
      </div>
      <div className="mb-5">
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
      </div>
      <div className="mb-10">
        <input
          type="password"
          name="password"
          placeholder="Confirm Password"
          id="password"
        />
      </div>
      <button className="login-btn block mx-auto py-3 px-11 w-full  bg-[#29BDBF] rounded-[10px] border-none text-white">
        Create account
      </button>
      <h6 className="text-[16px] text-gray-600 text-center  my-10">
        Or register using
      </h6>
      <div className="flex h-[40px] justify-center gap-4">
        <img src="/icons/facebook.png" alt="" />
        <img src="/icons/google.png" alt="" />
        <img src="/icons/face.svg" alt="" />
      </div>

      <Link
        className="mt-[100px] font-bold block text-center"
        href="/auth/login"
      >
        Login
      </Link>
    </div>
  );
};

export default page;
