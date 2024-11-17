import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/img/logo.jpg";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";




const Footer = () => {
  return (
    <div>
   <div className="mb-10 flex justify-center items-center">
    <p className="text-xl font-serif font-bold relative after:content-[''] after:block after:w-full after:h-1 after:bg-slate-950 after:mt-2">
      Contact Us
    </p>
  </div>
    <div className="flex flex-row justify-between items-center border-2 pr-4 pl-4 mb-4">
<div className="flex justify-center items-center space-x-8 text-3xl">
  <FaFacebook className="text-gray-500 hover:text-blue-600 transition duration-300" />
  <FaInstagramSquare className="text-gray-500 hover:text-pink-500 transition duration-300" />
  <FaWhatsapp className="text-gray-500 hover:text-green-500 transition duration-300" />
</div>
{/* icons */}
      <div className="flex justify-between items-center space-x-8">
        <div className="flex flex-row space-x-2 items-center">
      < FaPhoneAlt/><h3>0123456789</h3>
        </div>
        <div className="flex flex-row space-x-2 items-center">
        <FaHome/>  <h3>redenbix-elagmy</h3>
        </div>
      </div>
{/* icons */}
      <div>
        <img className="w-16" src={logo} alt="" />
      </div>
    </div>


    </div>

  )
}

export default Footer
