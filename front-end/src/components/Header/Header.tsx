"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MdOutlinePerson } from "react-icons/md";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import logo from "../../assets/images/logo.png";

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <header className="bg-darker-yellow h-[100px] flex items-center pr-[30px] xl:pr-[100px] pl-[30px] xl:pl-[100px] ">
      <div className="lg:hidden">
        <HiMiniBars3CenterLeft
          className="h-[48px] w-auto cursor-pointer min-h-[48px] "
          onClick={() => setShowMenuMobile(true)}
        />
      </div>
      <div className="grow flex justify-center lg:justify-start lg:w-[260px] lg:grow-0 lg:shrink-0">
        <Link href="\">
          <Image
            alt="Con chim xanh"
            src={logo}
            sizes="100vh"
            style={{
              width: "auto",
              height: "60px",
            }}
          />
        </Link>
      </div>
      <nav className={`nav ${showMenuMobile ? "left-0" : "-left-full"}`}>
        <IoClose
          className="w-7 h-7 absolute top-2 right-2 cursor-pointer lg:hidden"
          onClick={() => setShowMenuMobile(false)}
        />
        <ul className="flex gap-x-[75px] flex-col lg:flex-row">
          <li>
            <Link href="/" className="nav-item-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="nav-item-link">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-item-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-item-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`fixed top-0 left-0 w-screen h-screen z-40 bg-[rgba(0,0,0,0.4)] lg:hidden ${showMenuMobile ? '': 'hidden'}`}
        onClick={() => setShowMenuMobile(false)}
      ></div>
      <div className="lg:grow-0 lg:shrink-0 flex gap-x-[20px] xl:gap-x-[45px] justify-end">
        <MdOutlinePerson className="w-[28px] h-[28px] hidden lg:block" />
        <PiMagnifyingGlassBold className="w-[28px] h-[28px] hidden lg:block" />
        <AiOutlineHeart className="w-[28px] h-[28px] hidden lg:block" />
        <div className="relative cursor-pointer">
          <AiOutlineShoppingCart className="w-[45px] h-[45px] lg:w-[28px] lg:h-[28px] " />
          <span className="flex absolute justify-center items-center z-10 w-4 h-4 text-xs bg-amber-800 text-white rounded-full -top-1 right-[-5px]">
            1
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
