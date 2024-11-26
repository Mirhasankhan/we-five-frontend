"use client";
import { TProduct } from "@/components/ui/Card";
import ProductDetails from "@/components/ui/ProductDetails";
import { Rate } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    <div className="px-4 md:px-16 pt-8 bg-[#F4F8FF] min-h-screen">
      <div className="grid grid-cols-2 gap-6 ">
        <div>
          <div className="bg-[#F6F5FD] pt-4 flex justify-center">
            <Image
              height={40}
              width={420}
              alt=""
              src={currentProduct?.image}
            ></Image>
          </div>
          <div className="grid grid-cols-4 ">
            <div className="bg-red-400 pt-4 flex justify-center">
              <Image
                height={40}
                width={120}
                alt=""
                src={currentProduct?.image}
              ></Image>
            </div>
            <Image
              height={40}
              width={100}
              alt=""
              src={currentProduct?.image}
            ></Image>
            <Image
              height={40}
              width={100}
              alt=""
              src={currentProduct?.image}
            ></Image>
            <Image
              height={40}
              width={100}
              alt=""
              src={currentProduct?.image}
            ></Image>
          </div>
        </div>
        <div>
          <div className="border-b border-dotted pb-6">
            <button className="bg-[#2F1C59] text-white rounded-md px-6 py-1">
              New Arrival
            </button>
            <h1 className="font-semibold py-3 text-xl">
              {currentProduct?.name}
            </h1>
            <div className="flex items-center">
              <Rate allowHalf value={currentProduct?.rating} />
              <p>({currentProduct?.rating})</p>
              <p className="pl-2 text-[#7E53D4]">121 reviews</p>
            </div>
            <h1 className="font-semibold pt-2 text-xl">
              BDT {currentProduct?.price}
            </h1>
          </div>
          <div className="grid grid-cols-2 py-6 border-b border-dotted">
            <div>
              <h1 className="font-semibold">Available Size</h1>
              <div className="flex gap-2 mt-2">
                <button className="bg-[#ECE9FE] px-2 py-1 rounded-md">S</button>
                <button className="bg-[#ECE9FE] px-2 py-1 rounded-md">M</button>
                <button className="bg-[#ECE9FE] px-2 py-1 rounded-md">L</button>
                <button className="bg-[#ECE9FE] px-2 py-1 rounded-md">
                  XL
                </button>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Available Color</h1>
              <div className="flex gap-2 items-center mt-2">
                <p className="h-6 w-6 rounded-full bg-[#ECE9FE] border border-blue-500"></p>
                <p>Off white</p>
                <p className="h-6 w-6 rounded-full bg-black border "></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-semibold pb-2 mt-6">Quantity</h1>
            <div className="bg-[#ECE9FE] flex gap-4 px-3 py-1 rounded-full">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </div>
          <div className="flex w-full gap-4 mt-4">
            <button className="bg-[#7E53D4] w-full text-white rounded-md py-1">
              Buy Now
            </button>
            <button className="border text-[#7E53D4] rounded-md border-[#7E53D4] w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <ProductDetails product={currentProduct}></ProductDetails>
      </div>
    </div>
  );
};

export default Product;
