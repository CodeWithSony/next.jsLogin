import Image from "next/image";
import Link from "next/link";

import banyan from "../../public/banyan.jpg";
import heartBlack from "../../public/heart-outline.svg";
import cart from "../../public/cartpic.svg";
import Navbar from "./Navbar";

export default function ProductBar() {
  let someData = [
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
    {
      description: "key",
      rate: "₹4 ₹10 60% off",
    },
  ];

  return (
    <>
    {/* <Navbar/> */}
    <div className="flex  w-full bg-green-800 text-black h-auto">
      <div className="w-full flex gap-7 bg-green-200 h-auto flex-wrap justify-around items-start">
        {someData.map((data) => {
          return (
            <>
              <div className="w-[18rem]  bg-green-400 h-auto object-cover flex flex-col p-3 border border-black justify-center items-center">
                <Link href="/Detail">
            
                  <Image src={banyan}   alt="" />
                </Link>
                {/* <Image src={banyan} alt/> */}
                <div className="w-full flex flex-col">
                  <div className="w-full flex justify-between">
                    <span className="">
                      <Image src={heartBlack} alt="cart" className="h-6 w-auto" />
                    </span>

                    <span className="">
                      <Image src={cart} alt="cart" className="h-6 w-auto" />
                    </span>
                  </div>
                  <p>
                    Fresh and heathy fruit generating plant, oxigen giving,
                    shade giving, shelter giving to birds.
                  </p>
                  <p>1 plant</p>
                  <p>Rating</p>
                  <p>
                    &#8377;4 &#8377;<del>10</del> 60% off
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
    </>
  );
}
