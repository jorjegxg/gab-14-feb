"use client";

import Link from "next/link";
import Cronometru from "./components/Cronometru";
import LazyShow from "./components/LazyShow";

export default function Home() {
  return (
    <>
    
    <LazyShow>
    <Cronometru/>
     
      <Link href="/calendar" className="inline-block px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Calendar
    </Link>
    </LazyShow>
      <div className="flex min-h-screen items-center justify-center bg-blue-500 text-white text-3xl font-bold">
      Tailwind CSS funcționează! 🎉
    </div>
   
    <LazyShow>
      <div className="flex min-h-screen items-center justify-center bg-red-500 text-white text-3xl font-bold">
      Tailwind CSS funcționează! 🎉
    </div>
    </LazyShow>
    <LazyShow>
      <div className="flex min-h-screen items-center justify-center bg-red-500 text-white text-3xl font-bold">
      Tailwind CSS funcționează! 🎉
    </div>
    </LazyShow>
    <LazyShow>
      <div className="flex min-h-screen items-center justify-center bg-red-500 text-white text-3xl font-bold">
      Tailwind CSS funcționează! 🎉
    </div>
    </LazyShow>
    <LazyShow>
      <div className="flex min-h-screen items-center justify-center bg-red-500 text-white text-3xl font-bold">
      Tailwind CSS funcționează! 🎉
    </div>
    </LazyShow>
    <LazyShow>
      <div className="flex min-h-screen items-center justify-center bg-red-500 text-white text-3xl font-bold">
      Tailwind CSS funcționează! 🎉
    </div>
    </LazyShow>
    </>
  );
}
