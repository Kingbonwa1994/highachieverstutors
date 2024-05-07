"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export function BackgroundGradientDemo(props: { subjectname: string; imagesrc: string; subjectpage: string }) {
  return (
    <div className="my-4">
      <BackgroundGradient className="rounded-[22px] max-w-sm flex justify-between my-4 h-auto p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={props.imagesrc}
          alt="jordans"
          height="40"
          width="40"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {props.subjectname}
        </p>
        <Link href={props.subjectpage}>
        <button className="rounded-full pl-4 pr-4 py-1 hover:text-slate-300 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Schedule</span>
        </button>
        </Link>
       
      </BackgroundGradient>
    </div>
  );
}
