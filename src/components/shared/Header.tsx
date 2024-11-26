import React from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { SlBasketLoaded } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex justify-between py-2 items-center">
      <div className="flex items-center gap-1">
        <div className="md:hidden">
          <HiOutlineMenuAlt2></HiOutlineMenuAlt2>
        </div>
        <Image src={logo} height={80} width={80} alt=""></Image>
      </div>
      <div className="hidden md:flex text-[#646464] items-center gap-6">
        <Link className="text-[#581FC1]" href="/">
          Home
        </Link>
        <Link href="/">Shop</Link>
        <Link href="/">Deals</Link>
        <Link href="/">What New</Link>
      </div>
      <div className="flex items-center gap-2 md:relative">
        <input
          type="text"
          placeholder="search"
          className="hidden md:block rounded-full pl-8 py-1"
        />
        <SlBasketLoaded className="text-2xl"></SlBasketLoaded>
        <HiOutlineUser className="text-2xl"></HiOutlineUser>
        <IoIosSearch className="md:absolute left-3 text-2xl md:text-base  top-[10px]"></IoIosSearch>
      </div>
    </div>
  );
};

export default Header;
