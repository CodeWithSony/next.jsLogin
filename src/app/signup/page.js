"use client";
import React, { useState } from "react";
import Image from "next/image";
import tara from "../../../public/tara.jpeg";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

// import { POST } from "../api/signup";

export default function Page() {
  const [error, setError] = useState("");
  const Router = useRouter();

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[A-Z0-9,_%+-]+@[A-Z0-9.-]\.[A-Z]{2,}$/i;
  //   return emailRegex.test(email);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(name, email, password);

    // if (!isValidEmail(email)) {
    //   setError("This email is invalid");
    //   return;
    // }

    if (!password || password.length < 6) {
      setError("This password is invalid");
      return;
    }
    if (!name || name.length < 3) {
      new setError("Name is not valid...");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),


      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        Router.push("/login");
      }
    } catch (error) {
      setError("Error, try again...");
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="flex justify-center h-[30rem] items-center rounded-lg">
          <Image
            src={tara}
            alt="overflow"
            className="h-[33rem] border-4 border-green-500 rounded-9 rounded-md  shadow-green-500/40 shadow-md hover:shadow-green-200/40"
          />
          <div className="w-[28rem] flex flex-col justify-between items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col border border-green-400 rounded-lg w-full justify-center items-center shadow-md"
            >
              <label className="w-4/5 text-black" htmlFor="name">
                <h4 className="mb-5 mt-10">Display Name</h4>
                <input
                  type="text"
                  // className="p-2 w-[calc(100%-30px)] border border-gray-300 text-sm"
                  className="w-full border border-opacity-30 text-sm py-2"
                  id="name"
                  name="name"
                  // onChange={(e) => {
                  //   setName(e.target.value);
                  // }}
                />
              </label>

              <label className="w-4/5 text-black" htmlFor="email">
                <h4 className="mb-5 mt-10">Email</h4>
                <input
                  type="email"
                  name="name"
                  className="w-full border border-opacity-30 text-sm py-2  text-black"
                  id="username"
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
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
                Sign Up
                {/*  */}
              </button>
              <p className="mt-4 text-red-400 text-[16px]">{error && error}</p>
              <p className="text-black">
                {/*  */}
                Already have an account
                <span className="font-extrabold text-blue-800 py-2 ">
                  <Link href="/login">Login</Link>{" "}
                </span>
                {/*  */}
                {/* <button
                type="button"
                // onClick={handleSwitch}
                style={{ fontSize: "13px" }}
                className="font-extrabold text-blue-800 py-2 "
              >
               
              </button> */}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
