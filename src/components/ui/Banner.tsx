import bgImage from "../../assets/images/bg.png";
import bgImage2 from "../../assets/images/bg-2.png";
import truck from "../../assets/images/truck-delivery.png";
import payment from "../../assets/images/payment-02.png";
import exchange from "../../assets/images/exchange-01.png";
import Image from "next/image";
import ShopNow from "./ShopNow";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover text-white flex  flex-col items-center text-center justify-center bg-center bg-no-repeat h-[400px] w-full"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <h1 className="text-3xl font-semibold pb-2">
          Elevate Your Everyday Style
        </h1>
        <p className="text-sm">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <ShopNow></ShopNow>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[220px] md:h-[70px] w-full"
        style={{ backgroundImage: `url(${bgImage2.src})` }}
      >
        <div className="bg-[#6441C2] px-4 md:px-32 w-full h-full bg-opacity-95 md:bg-opacity-70 grid grid-cols-1 md:grid-cols-3  items-center text-white justify-around">
          <div className="flex gap-2">
            <Image src={truck} height={20} width={20} alt=""></Image>
            <div>
              <h1 className="text-xl">FREE SHIPPING</h1>
              <p className="text-xs">BUY BDT 3000+ & GET FREE DELIVERY</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={exchange} height={30} width={35} alt=""></Image>
            <div>
              <h1 className="text-xl">7 DAYS EXCHANGE</h1>
              <p className="text-xs">
                EXCHANGE WITHIN 7 DAYS WITH SIMILAR KIND OF PRODUCTS
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={payment} height={25} width={25} alt=""></Image>
            <div>
              <h1 className="text-xl">100% PAYMENT SECURE</h1>
              <p className="text-xs">
                CASH ON DELIVERY AND SECURE ONLINE PAYMENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
