import { useEffect, useState } from "react";
import logo from "../assets/img/logo.jpg";
import anime from "animejs";
import { AiOutlineBars } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-scroll";
import Cart from "./Cart"; // استيراد Cart

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة القائمة

  useEffect(() => {
    anime({
      targets: "#logo",
      translateX: [0, 100],
      direction: "alternate",
      loop: false,
      easing: "linear",
      complete: function () {
        anime({
          targets: "#logo",
          translateX: 0,
          easing: "linear",
        });
      },
    });

    anime({
      targets: ".nav-item",
      opacity: [0, 1],
      translateX: [-50, 0],
      delay: anime.stagger(100),
      easing: "easeOutExpo",
      duration: 2000,
    });

    if (isMenuOpen) {
      anime({
        targets: ".dropdown-menu",
        opacity: [0, 1],
        height: ["0px", "200px"],
        easing: "easeOutCubic",
        duration: 1000,
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="flex justify-between items-center p-4 navbar relative">
      <div className="w-16 rounded">
        <img id="logo" className="rounded-full" src={logo} alt="logo" />
      </div>

      <div className="p-2 relative flex flex-row sm:flex-col">
        <div
          onClick={toggleMenu}
          className="flex sm:hidden text-3xl cursor-pointer relative z-10"
        >
          <AiOutlineBars />
        </div>

        <div className="flex justify-between items-center pr-0 sm:p-2">
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } dropdown-menu absolute top-full right-0 mt-2 sm:flex sm:static sm:space-x-14 border-2 pr-1 pl-4 rounded-xl flex-col sm:flex-row space-y-1 sm:space-y-0`}
          >
            <li className="nav-item hover:underline hover:text-emerald-400">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item hover:underline hover:text-emerald-400">
              <Link to="products" smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li className="nav-item hover:underline hover:text-emerald-400">
              <Link to="events" smooth={true} duration={500}>
                Events
              </Link>
            </li>
            <li className="nav-item hover:underline hover:text-emerald-400">
              <Link to="articles" smooth={true} duration={500}>
                Articles
              </Link>
            </li>
          </ul>


        </div>
      </div>
    </div>
  );
}

export default Navbar;
