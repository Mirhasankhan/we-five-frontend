import { Rate } from "antd";
import { TProduct } from "./Card";

const Details = ({ currentProduct }: { currentProduct: TProduct }) => {
  return (
    <div className="relative">
      <div className="border-b border-dotted pb-6">
        <button className="bg-[#2F1C59] text-white rounded-md px-6 py-1">
          New Arrival
        </button>
        <h1 className="font-semibold py-3 text-xl">{currentProduct?.name}</h1>
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
            <button className="bg-[#ECE9FE] px-2 py-1 rounded-md">XL</button>
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
      <div className="md:flex w-full gap-4 mt-4">
        <button className="bg-[#7E53D4] w-full text-white rounded-md py-1">
          Buy Now
        </button>
        <button className="border mt-2 md:mt-0 text-[#7E53D4] rounded-md border-[#7E53D4] w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
