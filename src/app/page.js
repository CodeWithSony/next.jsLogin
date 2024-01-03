

import LeftSideBar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
// import LeftSidebar from "@/components/LeftSidebar";
// import Products from "@/app/Products"
// import Image from "next/image";
import ProductBar from "@/components/ProductBar";

// const inter = Inter({ subsets: ['latin'] })

export default function page() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      <div className="flex w-full h-auto mx-auto gap-x-6">
        <LeftSideBar />
       <ProductBar/>
      </div>

      <h1>Hello</h1>
    </main>
  );
}
