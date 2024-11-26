import ShopNow from "@/components/ui/ShopNow";
import handsome from "../../../assets/images/handsome.png";
import Image from "next/image";

const MenCollection = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 pt-24">
      <div className="bg-[#EEECFB] h-[290px] md:h-[400px] relative">
        <Image
          src={handsome}
          height={100}
          width={400}
          alt=""
          className="absolute bottom-0  md:left-24"
        />
      </div>

      <div className="flex flex-col justify-center md:ml-16">
        <h1 className="text-3xl font-bold">MEN COLLECTION</h1>
        <ShopNow></ShopNow>
      </div>
    </div>
  );
};

export default MenCollection;
