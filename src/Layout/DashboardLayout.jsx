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
    path: "/personal-information",
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
  // const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div>
        <div className="container flex gap-5 xl:gap-7 pt-40 pb-5 xl:pb-10">
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
            {/* Profile info */}
            {/* {isUpdating ? (
              <div className="h-36 md:h-40 bg-no-repeat bg-center bg-cover border border-gray-900 bg-gray-900 bg-blend-overlay rounded-xl flex gap-5 px-10 items-center justify-center mb-5 lg:mb-10">
                <div>
                  <div className="animate-spin rounded-full size-7 mx-auto border-t-2 border-white border-solid" />
                  <p className="mt-3">Updating....</p>
                </div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    backgroundImage: `url(${user?.cover_image ? `${import.meta.env.VITE_SITE_URL}/${user?.cover_image?.image_path}` : coverBg})`,
                  }}
                  className="h-36 md:h-40 bg-no-repeat bg-center bg-cover bg-black/40 bg-blend-overlay rounded-xl flex gap-5 px-3 md:px-10 items-center justify-between mb-5 lg:mb-10"
                >
                  <div className="flex gap-3 md:gap-4 items-center">
                    <figure className="size-11 md:size-14 overflow-hidden rounded-full bg-primary-pink text-white font-medium md:text-xl grid place-items-center shrink-0">
                      {user?.avatar_path ? (
                        <img
                          src={`${import.meta.env.VITE_SITE_URL}/${user?.avatar_path}`}
                          alt="avatar"
                          className="size-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="uppercase">
                          {user?.first_name?.at(0)}
                        </span>
                      )}
                    </figure>

                    <div>
                      <h3 className="font-semibold md:text-xl mb-0.5 md:mb-1">
                        <span className="capitalize">{user?.first_name}</span>{" "}
                        <span className="capitalize">{user?.last_name}</span>
                      </h3>
                      <p className="text-off-white text-sm md:text-base">
                        Mission Control Dashboard{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-10 items-center">
                    <button
                      onClick={() => setShowBannerModal(true)}
                      className="cursor-pointer duration-500 transition-transform hover:scale-125"
                    >
                      <UploadSvg />
                    </button>
                  </div>
                </div>
              </div>
            )} */}

            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default DashboardLayout;
