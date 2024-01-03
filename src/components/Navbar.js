"use client";
import Image from "next/image";
import search from "../../public/search.svg";
import cartpic from "../../public/cartpic.svg";

// import {search} from "../public/search.svg"
import Link from "next/link";

export default function Navbar() {
  const user = null;
  return (
    <nav className="flex w-full flex-wrap items-center justify-center  bg-black sticky top-0 left-0 mb-10rem absolute top-0 left-0 0">
      <div className="w-4/5 items-center justify-around flex  bg-black text-white flex-wrap my-3 laptop:flex-nowrap phone:w-screen:justify-between">
        <div className="flex justify-around w-full items-center">
          {/* <Link href="/" className="nav-logo nav-item">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsqSia8VMaIdlL0SKFjybBrvA2k0vGVAM77kXH6siLK2xVtxMXX6hGPO1TAA7hIIjAjY&usqp=CAU" alt="logo" className="w-24 border-4 border-green-500 rounded-9 rounded-md shadow shadow-green-500/40 hover:shadow-green-200/40"  width={50}
      height={300}/>
          
        </Link>  */}
          <Link href="/" className="font-bold text-white">
            Spread Trees
          </Link>

          {/* </Link> */}
          <form className="w-full flex justify-around relative items-center">
            <input
              type="search"
              name=""
              id=""
              className="w-full py-2 px-5 bg-green-200 text-green-700"
              placeholder="search..."
            />
            <span className="flex flex-col justify-center items-center w-3 h-3">
              <Image
                src={search}
                alt=""
                className="absolute left-16"
                width={20}
                height={20}
              />
            </span>
          </form>
        </div>

        <div className="flex justify-around items-center w-full text-lg font-semibold text-white">
          {/* <MyAccount /> */}
          <Link href="/myaccount">My Account</Link>
          <Link href="/">Products</Link>

          <Link
            href="/signup"
            className="mx-3 text-sm font-semibold no-underline text-gray-700 transition-bg duration-200 transition-colors px-3 py-2 border border-blue-500 rounded-md bg-green-200 cursor-pointer"
          >
            Signup
          </Link>

          <span className="flex flex-col justify-center items-center w-12 h-12">
            <Image
              src={cartpic}
              alt="cart"
              className="h-9 bg-green-200 rounded"
              h="23"
              w="5"
            />
          </span>
        </div>
      </div>
    </nav>
  );
}
