import Image from "next/image";
import logo from "../../assets/images/logo-2.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D]  text-white">
      <div className="px-4 md:px-16 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image src={logo} height={100} width={240} alt=""></Image>
            <p>
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>
          <div>
            <h1 className="font-medium text-xl">Sign Up For Our Newsletter</h1>
            <p className="py-3">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className="flex">
              <input
                className="border p-1 pr-4 md:pr-12 rounded-l-md"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="bg-[#7E53D4] text-white px-6 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-4 pt-8">
          <div>
            <h1>Contact Us</h1>
            <p>support@wefive.com</p>
          </div>
          <div>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
          </div>

          <div>
            <h1>Social LInk</h1>
            <div className="flex gap-6 text-2xl pt-2">
              <FaFacebook></FaFacebook>
              <FaXTwitter></FaXTwitter>
              <FaLinkedin></FaLinkedin>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7E53D4] text-center py-3 text-sm">
        <p className="pb-1 hidden md:block">&copy; 2024 | WeFive</p>
        <p>&copy; 2024 | WeFive</p>
      </div>
    </div>
  );
};

export default Footer;
