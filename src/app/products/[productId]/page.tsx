"use client";
import { TProduct } from "@/components/ui/Card";
import Details from "@/components/ui/Details";
import MoreImages from "@/components/ui/MoreImages";
import ProductDetails from "@/components/ui/ProductDetails";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { SlBasketLoaded } from "react-icons/sl";

const Product = ({ params }: any) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`/products.json`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const p = product.filter((p: TProduct) => p._id == params.productId);
  const currentProduct: TProduct = p["0"];
  return (
    <div className="relative px-4 md:px-16 pt-12 bg-[#F4F8FF] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div>
          <div className="relative bg-[#F6F5FD] pt-4 flex justify-center">
            <Image
              height={40}
              width={360}
              alt=""
              src={currentProduct?.image}
            ></Image>
            <GoArrowLeft className="absolute top-40 left-0 border border-[#7E53D4] text-2xl rounded-full p-1 text-[#7E53D4]"></GoArrowLeft>
            <GoArrowRight className="absolute  top-40 right-0 border border-[#7E53D4] text-2xl rounded-full p-1 text-[#7E53D4]"></GoArrowRight>
          </div>
          <div className="hidden md:grid grid-cols-4 gap-4 mt-4">
            <MoreImages currentProduct={currentProduct}></MoreImages>
            <MoreImages currentProduct={currentProduct}></MoreImages>
            <MoreImages currentProduct={currentProduct}></MoreImages>
            <MoreImages currentProduct={currentProduct}></MoreImages>
          </div>
        </div>
        <Details currentProduct={currentProduct}></Details>
      </div>
      <div className="mt-12">
        <ProductDetails product={currentProduct}></ProductDetails>
      </div>
      <div className="absolute right-0 top-[170px] hidden  rounded-l-lg p-2 text-white bg-[#581FC1] md:flex flex-col items-center">
        <SlBasketLoaded></SlBasketLoaded>
        <h1>Your Bag</h1>
        <p>0</p>
      </div>
    </div>
  );
};

export default Product;
