import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href={"/"}>
        <FaXTwitter className="h-16 w-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-200 p-3 rounded-full w-fit"
      >
        <HiHome className="h-7 w-7" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold">
        Sign In
      </button>
    </div>
  );
}
