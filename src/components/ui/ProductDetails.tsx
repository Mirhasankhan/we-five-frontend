import Image from "next/image";
import user from "../../assets/images/handsome.png";
import { GoThumbsup } from "react-icons/go";
import { Progress, Rate } from "antd";
import Card, { TProduct } from "./Card";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductDetails = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <div className="flex items-center justify-between md:justify-start gap-4">
        <h1>Details</h1>
        <h1 className="text-[#7E53D4]">Review & Rating</h1>
        <h1>Discussion</h1>
      </div>
      <div className="grid grid-cols-5 gap-6 py-6">
        <div className="col-span-5 md:col-span-3">
          <button className="border flex items-center px-3 py-1 mb-6  rounded-md">
            Newest <MdKeyboardArrowDown className="text-xl" />
          </button>
          <div className="flex items-center gap-1">
            <Image
              className="rounded-full"
              src={user}
              height={60}
              width={60}
              alt=""
            ></Image>
            <div>
              <h1 className="pb-1 font-semibold text-xl">
                Cameron Williamson <span className="text-xs">3 days</span>
              </h1>
              <Rate allowHalf value={product?.rating} />
            </div>
          </div>
          <h1 className="py-2">Very Nice!!!</h1>
          <div className="flex items-center gap-1">
            <GoThumbsup></GoThumbsup> <h1>10</h1>
          </div>
        </div>
        <div className="col-span-5 md:col-span-2">
          <div className="flex gap-12">
            <h1>Product Review</h1>
            <p className="text-[#7E53D4]">121 Reviews</p>
          </div>
          <div className="flex justify-between py-2 items-center">
            <Rate allowHalf value={product?.rating} />
            <h1>({product?.rating})</h1>
          </div>
          <div className="border-t-2 border-gray-300 pt-4">
            <div className="flex gap-1">
              <h5>5</h5>
              <Progress showInfo={false} percent={30} />
            </div>
            <div className="flex gap-1">
              <h5>4</h5>
              <Progress showInfo={false} percent={40} />
            </div>
            <div className="flex gap-1">
              <h5>3</h5>
              <Progress showInfo={false} percent={60} />
            </div>
            <div className="flex gap-1">
              <h5>2</h5>
              <Progress showInfo={false} percent={10} />
            </div>
            <div className="flex gap-1">
              <h5>1</h5>
              <Progress showInfo={false} percent={20} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Related Products</h1>
        <div className="flex overflow-x-auto gap-6 my-6">
          <Card bigDeal={false} product={product}></Card>
          <Card bigDeal={false} product={product}></Card>
          <Card bigDeal={false} product={product}></Card>
          <Card bigDeal={false} product={product}></Card>
        </div>
        <div className="flex mb-4 justify-center py-3">
          <button className="rounded-lg py-1 px-3 text-white bg-[#6441C2]  border border-[#6441C2] ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
