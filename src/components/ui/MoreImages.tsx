import Image from "next/image";
import React from "react";
import { TProduct } from "./Card";

const MoreImages = ({ currentProduct }: { currentProduct: TProduct }) => {
  return (
    <div>
      <Image height={40} width={125} alt="" src={currentProduct?.image}></Image>
    </div>
  );
};

export default MoreImages;
