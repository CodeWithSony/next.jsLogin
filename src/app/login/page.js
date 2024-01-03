"use client";
import React from "react";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function page() {

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="flex justify-center h-[30rem] items-center rounded-lg">
          <div className="w-[28rem] flex flex-col justify-between items-center">
            <form
              // onSubmit={handlerSubmit}
              className="flex flex-col border border-green-400 rounded-lg w-full justify-center items-center shadow-md"
            >
              <label className="w-4/5 text-black" htmlFor="email">
                <h4 className="mb-5 mt-10">Email</h4>
                <input
                  type="email"
                  name="name"
                  className="w-full border border-opacity-30 text-sm py-2  text-black"
                  id="email"

                />
              </label>
              <label className="w-4/5 text-black" htmlFor="password">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 className="mb-5 mt-10">Password</h4>
                  {/*  */}
                  <p style={{ color: "#007ac6", fontSize: "13px" }}>
                    forgot password?
                  </p>
                  {/*  */}
                </div>
                <input
                  type="password"
                  name="password"
                  className="w-full border border-opacity-30 text-sm py-2 text-black
                "
                  id="password"
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                />
              </label>

              <button
                type="submit"
                className="w-4/5 mt-4 px-2 py-2  bg-green-400 border border-green-500 text-white rounded-md cursor-pointer transition duration-200 text-sm font-extrabold	"
              >
                {/*  */}
                Log in
                {/*  */}
              </button>

              <p className="text-black">
                {/*  */}
                Don't have an account{" "}
                <span className="font-extrabold text-blue-800 py-2 ">
                  {" "}
                  <Link href="/Signup">Sign Up</Link>{" "}
                </span>
                {/*  */}
                <button
                  type="submit"
                  // onClick={handleSwitch}
                  style={{ fontSize: "13px" }}
                  className="font-extrabold text-blue-800 py-2 "
                ></button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};


