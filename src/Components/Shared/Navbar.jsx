import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  CartSVG,
  LogoutSVG,
  NotificationSVG,
  OrderHistorySVG,
  SearchSVG,
  SettingsSVG,
  UserInfoSVG,
} from "../Svg/SvgContainer";
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about-us" },
  { name: "Customer Review", path: "/customer-review" },
  { name: "Contact Us", path: "/contact-us" },
];

const dashboardNavLinks = [
  {
    icon: UserInfoSVG,
    label: "Personal Information",
    path: "/dashboard",
  },
  {
    icon: CartSVG,
    label: "My Orders",
    path: "/dashboard/orders",
  },
  {
    icon: OrderHistorySVG,
    label: "Order History",
    path: "/dashboard/order-history",
  },
  {
    icon: SettingsSVG,
    label: "Settings",
    path: "/dashboard/settings",
  },
  {
    icon: LogoutSVG,
    label: "Logout",
    path: "/dashboard/logout",
  },
];

const mobileNavLinks = [...navLinks, { name: "Sign Up", path: "/auth/register" }];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { user } = useAuth();

  const location = useLocation();

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
      <div className="max-w-[1296px] fixed top-6 left-1/2 right-1/2 -translate-x-1/2 z-[999] w-full mx-auto px-1">
        <div className="flex w-full sm:py-2 px-2 sm:px-4 justify-between items-center rounded-lg border-y border-[0.4px] border-solid border-[#5b5f41] bg-[#3d3d3d33] backdrop-blur-[10px]">
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
                  `text-base font-normal leading-6 hover:text-[#C1C79E] hover:underline transition duration-300 ${isActive ? "text-[#C1C79E]" : "text-white"}`
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
            {!user && (
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
            )}
            {user && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu(!openMenu);
                }}
                className="relative"
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <figure className="size-10 overflow-hidden rounded-full border bg-secondary-100 border-primary text-white font-medium text-xl grid place-items-center">
                    {user?.image ? (
                      <img
                        src={`${import.meta.env.VITE_SITE_URL}/${user?.image}`}
                        alt="avatar"
                        className="size-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="uppercase">{user?.name?.at(0)}</span>
                    )}
                  </figure>

                  <span
                    className={`hidden md:block ${openMenu && "rotate-180 duration-300 transition"}`}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>

                {/* Popover */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`${openMenu ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"} duration-500  origin-top transition w-[220px] xl:w-[250px] border shadow absolute top-12 right-0 p-2.5 xl:p-4 rounded-xl border-secondary-100 bg-secondary-500 backdrop-blur-xs`}
                >
                  <div className="flex gap-2 items-center">
                    <figure className="size-8 xl:size-10 overflow-hidden rounded-full border border-primary bg-secondary-100 text-white font-medium text-xl grid place-items-center shrink-0">
                      {user?.image ? (
                        <img
                          src={`${import.meta.env.VITE_SITE_URL}/${user?.image}`}
                          alt="avatar"
                          className="size-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="uppercase">{user?.name?.at(0)}</span>
                      )}
                    </figure>

                    <div>
                      <h3 className="text-[13px] lg:text-sm font-medium mb-0.5">
                        {user?.name}
                      </h3>

                      <p className="text-xs truncate w-10/12 xl:w-11/12">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <hr className="text-gray-800 mt-3 xl:mt-5 mb-2" />

                  <div className="xl:space-y-2">
                    {dashboardNavLinks?.map((link) => {
                      const isActive = location.pathname === link?.path;
                      return (
                        <NavLink
                          key={link?.label}
                          to={link?.path}
                          onClick={() => setOpenMenu(false)}
                          className={`flex gap-3 items-center cursor-pointer hover:bg-primary-pink px-2 py-2 rounded text-[13px] xl:text-sm duration-300 transition w-full ${isActive && "text-primary"}`}
                        >
                          <link.icon />
                          <span>{link?.label}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer lg:hidden hover:text-primary transition duration-300"
            >
              <IoMdMenu className="size-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 w-full min-h-screen bg-secondary-500 z-1000 p-4 overflow-y-auto"
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
