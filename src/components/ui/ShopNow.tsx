import { GoArrowUpRight } from "react-icons/go";

const ShopNow = () => {
  return (
    <div className="flex items-center mt-4 text-white">
      <button className="p-2 bg-primary rounded-full px-5">Shop Now</button>
      <button className="p-2 bg-primary rounded-full">
        <GoArrowUpRight className="text-xl"></GoArrowUpRight>
      </button>
    </div>
  );
};

export default ShopNow;
