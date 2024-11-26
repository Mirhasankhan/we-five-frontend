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
    <div className="relative">
      <div>
        <Image
          className="rounded-md"
          src={product?.image}
          height={100}
          width={280}
          alt=""
        ></Image>
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
        <Link href={`products/${product?._id}`}>
          <button className="w-full rounded-lg py-1 text-[#6441C2]  border border-[#6441C2] ">
            Add to Cart
          </button>
        </Link>
      </div>
      {bigDeal && (
        <h1 className="absolute top-0 pt-0 text-center right-4 bg-[#6441C2] text-white rounded-b-full p-1">
          Up <br /> to <br /> 40%
        </h1>
      )}
    </div>
  );
};

export default Card;
