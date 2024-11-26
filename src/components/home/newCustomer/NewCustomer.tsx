import ShopNow from "@/components/ui/ShopNow";
import React from "react";
import customer from "../../../assets/images/image 2.png";
import Image from "next/image";

const NewCustomer = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 pt-4 my-6 bg-[#EEECFB]">
      <div className="flex flex-col ml-8 justify-center items-center md:items-start text-center md:text-left">
        <h1
          className="text-[#6F42C1] text-xl"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Big Deal
        </h1>
        <p className="text-xl md:text-3xl font-semibold pt-1">
          <span className="text-[#6F42C1]">30%</span> Off for The New Customers
        </p>
        <ShopNow></ShopNow>
      </div>
      <div>
        <Image src={customer} height={200} width={400} alt=""></Image>
      </div>
    </div>
  );
};

export default NewCustomer;
