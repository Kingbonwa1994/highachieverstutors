"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export function BackgroundGradientDemo(props: { subjectname: string; imagesrc?: string; subjectpage: string; }) {
  return (
    <div className="">
      <Link href={props.subjectpage} className="mt-4 hover:translate-x-1 flex items-center justify-between w-full">
      <BackgroundGradient className=" rounded-[22px] max-w-sm flex my-4  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={props.imagesrc!}
          alt=""
          height="40"
          width="60"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {props.subjectname}
        </p>     
       
      </BackgroundGradient>
      </Link>
    </div>
  );
}
