import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartSVG, NotificationSVG, SearchSVG } from "../Svg/SvgContainer";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about-us" },
  { name: "Customer Review", path: "/customer-review" },
  { name: "Contact Us", path: "/contact-us" },
];

const mobileNavLinks = [...navLinks, { name: "Sign Up", path: "/register" }];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const observerElement = mobileMenuRef.current;

    if (isMenuOpen && observerElement) {
      disableBodyScroll(observerElement);
    } else {
      enableBodyScroll(observerElement);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full relative">
      <div className="flex max-w-[1292px] w-full mx-auto sm:py-2 px-2 sm:px-4 justify-between items-center rounded-lg border-[0.4px] border-solid border-[#5b5f41] bg-[#3d3d3d33] absolute top-6 left-1/2 right-1/2 -translate-x-1/2 z-[999] backdrop-blur-[10px]">
        {/* logo */}
        <Link to={"/"} className="w-[67px] h-[75px] shrink-0 aspect-[67/75]">
          <img src="/logo.png" alt="logo" className="size-full" />
        </Link>

        {/* nav links */}
        <div className="items-center hidden lg:flex gap-8">
          {navLinks?.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `text-base font-normal leading-6 hover:text-[#C1C79E] hover:underline transition duration-300 ${isActive ? "text-[#C1C79E]": "text-white"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* icons & auth buttons */}
        <div className="flex items-center gap-4 sm:gap-7 lg:gap-12">
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="cursor-pointer max-sm:hidden">
              <SearchSVG />
            </button>
            <Link to={"/cart"} className="cursor-pointer">
              <CartSVG />
            </Link>
            <button className="cursor-pointer max-sm:hidden">
              <NotificationSVG />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to={"/auth/register"}
              className="text-white max-lg:hidden text-base font-normal leading-6 hover:text-[#C1C79E] transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              to={"/auth/login"}
              className="flex w-20 py-2 px-4 justify-center items-center gap-[10px] rounded-[11.75px] bg-[#C1C79E] text-black hover:bg-[#d9e2a8] transition duration-300 text-center text-base font-normal leading-6"
            >
              Login
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer lg:hidden hover:text-primary transition duration-300"
          >
            <IoMdMenu className="size-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 w-full min-h-screen bg-secondary-500 z-[1000] p-4 overflow-y-auto"
        >
          <div className="w-[67px]">
            <Link
              to={"/"}
              onClick={() => setIsMenuOpen(false)}
              className="size-full shrink-0"
            >
              <img src="/logo.png" alt="logo" className="size-full" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-4 top-4 cursor-pointer size-8 bg-primary text-black flex items-center justify-center rounded-md"
          >
            <IoMdClose className="size-6" />
          </button>

          <div className="relative w-full mt-8">
            <input
              type="text"
              placeholder="Search ...."
              className="flex py-3 pr-14 pl-5 items-center gap-2 self-stretch rounded-xl border border-[#C1C79E] bg-transparent text-[#8FA2A5] text-base font-normal leading-6 w-full outline-none"
            />
            <span className="absolute top-4 right-5">
              <IoSearch className="size-5 text-primary" />
            </span>
          </div>

          <div className="flex flex-col space-y-4 mt-8">
            {mobileNavLinks?.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xl hover:text-primary ${isActive ? "text-primary" : "text-white"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
