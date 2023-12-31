"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className='w-full z-10 absolute'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center     sm:px-16 px-6 py-4'>
        <Link className='flex justify-center items-center' href={"/"}>
          <Image src={"/logo.svg"} alt='car Logo' width={118} height={18} className='object-contain' />
        </Link>
        <CustomButton title={"Sign In"} btnType={"button"} containerStyles={"text-primary-blue rounded-full bg-white min-w-[130px]"} handleClick={() => {}} />
      </nav>
    </header>
  );
};

export default Navbar;
