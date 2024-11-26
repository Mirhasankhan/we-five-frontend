import Image from "next/image";
import Link from "next/link";
import { Rate } from "antd";

export type TProduct = {
  _id: string;
  name: string;
  image: string;
  price: string;
  rating: number;
};

const Card = ({
  product,
  bigDeal,
}: {
  product: TProduct;
  bigDeal: boolean;
}) => {
  return (
    <Link href={`products/${product?._id}`} className="relative">
      <div>
        <div className="relative w-[280px] h-[280px]">
          <Image
            className="rounded-md object-cover"
            src={product?.image}
            alt=""
            fill
          />
        </div>
        {bigDeal && (
          <div className="flex items-center mt-2">
            <Rate allowHalf value={product?.rating} />
            <h1>(50)</h1>
          </div>
        )}
        <div className="flex justify-between items-center py-3">
          <p>{product?.name}</p>
          <p className="font-semibold">BDT{product?.price}</p>
        </div>

        <button className="w-full rounded-lg py-1 text-[#6441C2]  border border-[#6441C2] ">
          Add to Cart
        </button>
      </div>
      {bigDeal && (
        <h1 className="absolute top-0 pt-0 text-center right-4 bg-[#6441C2] text-white rounded-b-full p-1">
          Up <br /> to <br /> 40%
        </h1>
      )}
    </Link>
  );
};

export default Card;
