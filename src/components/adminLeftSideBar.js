import React from 'react'
import Link from 'next/link'

const adminLeftSideBar = () => {
  return (
    <>
          <div className="flex flex-col w-1/5">
        <ul className="flex flex-col bg-violet-400 pt-8 text-white w-full">
          <li className="m-4">
            {" "}
            <Link
              href=""
              className="p-2 text-white font-extrabold	text-4xl  ui-monospace"
            >
              Let's Go
            </Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/Dashboard">Dashboard</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/UserManagement">User Management</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/PackageManagement">Package Management</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/ExpiredPackages">Expired Packages</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/BannerManagement">Banner Management</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/CategoryManagement"> Category Management</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/BookingManagement">Booking Management</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/OfferManagement">Offer Management</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/CouponManagement">Coupon Management</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/SalesReport">Sales Report</Link>{" "}
          </li>
          <li className="m-4 hover:bg-green-400 p-2 pl-0">
            {" "}
            <Link href="/LogOut">Log Out</Link>{" "}
          </li>
        </ul>
      </div>
    </>
  )
}

export default adminLeftSideBar
