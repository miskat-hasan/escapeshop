import React from "react";
import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

import {
  CartSVG,
  LogoutSVG,
  OrderHistorySVG,
  SettingsSVG,
  UserInfoSVG,
} from "../Components/Svg/SvgContainer";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const navLinks = [
  {
    icon: UserInfoSVG,
    label: "Personal Information",
    path: "",
  },
  {
    icon: CartSVG,
    label: "My Orders",
    path: "/orders",
  },
  {
    icon: OrderHistorySVG,
    label: "Order History",
    path: "/order-history",
  },
  {
    icon: SettingsSVG,
    label: "Settings",
    path: "/settings",
  },
  {
    icon: LogoutSVG,
    label: "Logout",
    path: "/logout",
  },
];

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container flex gap-5 xl:gap-7 pt-32 sm:pt-40 pb-5 xl:pb-10">
          {/* Sidebar */}
          <aside className="hidden w-[247px] h-fit shrink-0 lg:flex p-4 flex-col items-start gap-6 rounded-2xl bg-[#0C353C]/20 border border-secondary-100">
            {navLinks?.map((link) => (
              <NavLink
                key={link?.label}
                to={`/dashboard${link?.path}`}
                end
                className={({ isActive }) =>
                  `flex p-3 items-center gap-2 rounded-xl border-[0.4px] border-[#5C787C] bg-[#F6F6F6]/10 w-full cursor-pointer duration-500 transition hover:bg-primary text-[#E7EBEC] group text-base leading-[150%] hover:text-black ${isActive && "bg-primary text-black"}`
                }
              >
                <link.icon
                  className={"group-hover:text-black transition duration-300"}
                />
                <h3 className="">{link?.label}</h3>
              </NavLink>
            ))}
          </aside>

          {/* Outlet */}
          <main className="grow">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
      {/* <ScrollRestoration /> */}
    </>
  );
};

export default DashboardLayout;
