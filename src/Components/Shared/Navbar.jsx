import React from "react";
import { Link } from "react-router-dom";
import { CartSVG, NotificationSVG, SearchSVG } from "../Svg/SvgContainer";

const Navbar = () => {
  
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Customer Review",
      path: "/customer-review",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="w-full bg-indigo-50">
      <div className="flex w-[1292px] mx-auto py-2 px-4 justify-between items-center rounded-lg border-[0.4px] border-solid border-[#5b5f41] bg-[#3d3d3d33] absolute top-6  left-1/2 right-1/2 -translate-x-1/2 z-999 backdrop-blur-[10px]">
        {/* logo */}
        <Link to={'/'} className="w-[67px] h-[75px] shrink-0 aspect-[67/75]">
          <img src="/logo.png" alt="logo" className="size-full" />
        </Link>

        {/* nav links */}
        <div className="flex items-center gap-5 md:gap-8">
          {navLinks?.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="text-white text-base font-normal leading-6 hover:text-[#C1C79E] hover:underline transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* icons & auth buttons */}
        <div className="flex items-center gap-12">
          {/* search, cart & notification icons */}
          <div className="flex items-center gap-6">
            <button className="cursor-pointer">
              <SearchSVG />
            </button>
            <Link to={'/cart'} className="cursor-pointer">
              <CartSVG />
            </Link>
            <button className="cursor-pointer">
              <NotificationSVG />
            </button>
          </div>

          {/* LOGIN & REGISTER BUTTONS */}
          <div className="flex items-center gap-6">
            <Link to={'/auth/register'} className="text-white text-base font-normal leading-6 hover:text-[#C1C79E] transition duration-300">Sign Up</Link>
            <Link to={'/auth/login'} className="flex w-20 py-2 px-4 justify-center items-center gap-[10px] rounded-[11.75px] bg-[#C1C79E] text-black hover:bg-[#d9e2a8] transition duration-300 text-center text-base font-normal leading-6">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
