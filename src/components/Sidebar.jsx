"use client";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome, HiDotsHorizontal } from "react-icons/hi";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col p-3 justify-between h-screen">
      <div className="flex flex-col gap-4">
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
        {session ? (
          <button
            className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
      {session && (
        <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200">
          <img
            className="w-10 h-10 rounded-full xl:mr-2"
            src={session.user.image}
            alt="user-img"
          />
          <div className="hidden xl:inline">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-gray-500">@{session.user.username}</p>
          </div>
          <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      )}
    </div>
  );
}
