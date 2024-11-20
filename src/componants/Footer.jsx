import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/img/logo.jpg";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="mb-10 mt-8 flex justify-center items-center">
        <p className="text-xl font-serif font-bold relative after:content-[''] after:block after:w-full after:h-1 after:bg-slate-950 after:mt-2">
          Contact Us
        </p>
      </div>
      <div className="flex flex-row justify-between items-center border-2 pr-4 pl-4 mb-4">
        <div className="flex justify-center items-center space-x-2 sm:space-x-8 text-sm sm:text-2xl">
          {/* الروابط الخاصة بالأيقونات */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500 transition duration-300"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
        {/* icons */}
        <div className="flex justify-between items-center space-x-2 sm:space-x-8 text-xs sm:text-xs">
          <div className="flex flex-row space-x-1 sm:space-x-4 items-center">
            <FaPhoneAlt />
            <h3>0123456789</h3>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <FaHome />
            <h3>redenbix-elagmy</h3>
          </div>
        </div>
        {/* icons */}
        <div>
          <img className="w-6 sm:w-14" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;