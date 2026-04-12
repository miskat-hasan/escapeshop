import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import {
  DFiveSvg,
  DFourSvg,
  DOneSvg,
  DSevenSvg,
  DSixSvg,
  DThreeSvg,
  DTwoSvg,
  UploadSvg,
} from "../Shared/Svg/SvgContainer";
import coverBg from "../assets/cover.png";
import { useLogout } from "../Hooks/api/auth_api";
import { ImSpinner9 } from "react-icons/im";
import { useUpdateUserInfo } from "../Hooks/api/dashboard_api";
import useAuth from "../Hooks/useAuth";
import BannerModal from "../Components/Modal/BannerModal";
import Modal from "../Components/Common/Modal";

const navLinks = [
  {
    icon: <DOneSvg />,
    title: "Start New Mission",
    text: "Create custom stickers",
    path: "/choose-sticker",
  },
  {
    icon: <DTwoSvg />,
    title: "Dashboard",
    text: "Mission overview",
    path: "/dashboard",
  },
  {
    icon: <DThreeSvg />,
    title: "Orders",
    text: "Manage finances",
    path: "/dashboard/orders",
  },
  {
    icon: <DFourSvg />,
    title: "Designs",
    text: "Manage designs",
    path: "/dashboard/designs",
  },
  {
    icon: <DFiveSvg />,
    title: "Support",
    text: "Contact ground crew",
    path: "/dashboard/support",
  },
  {
    icon: <DSixSvg />,
    title: "Settings",
    text: "Manage account",
    path: "/dashboard/settings",
  },
];

const DashboardLayout = () => {
  const { user } = useAuth();
  const { mutate: logoutMutation, isPending } = useLogout();
  const { mutate: updateMutation, isPending: isUpdating } = useUpdateUserInfo();
  const [showBannerModal, setShowBannerModal] = useState(false);

  return (
    <>
      <Navbar />
      <div>
        <div className="container flex gap-5 xl:gap-7 pt-7 xl:pt-14 pb-5 xl:pb-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[280px] xl:w-[350px] 2xl:w-[387px] shrink-0 space-y-4 xl:space-y-5">
            {navLinks?.map(link => (
              <NavLink
                key={link?.title}
                to={link?.path}
                end
                className={({ isActive }) =>
                  `flex gap-4 items-center border border-primary-pink rounded-xl xl:rounded-2xl px-4 py-3 xl:p-4 2xl:p-5 cursor-pointer duration-500 transition hover:scale-105 ${isActive ? "bg-primary-pink" : "hover:bg-primary-pink/20"}`
                }
              >
                <span>{link?.icon}</span>
                <div>
                  <h3 className="font-medium text-[15px] xl:text-base">
                    {link?.title}
                  </h3>
                  <span className="text-sm xl:text-[15px] text-off-white">
                    {link?.text}
                  </span>
                </div>
              </NavLink>
            ))}

            {/* Logout btn */}
            <button
              disabled={isPending}
              onClick={() => logoutMutation()}
              className="border border-primary-pink rounded-xl xl:rounded-2xl px-4 py-3 xl:p-4 2xl:p-5 cursor-pointer duration-500 transition hover:scale-105 hover:bg-primary-pink/20 w-full disabled:cursor-not-allowed disabled:opacity-80"
            >
              {isPending ? (
                <span className="w-full flex gap-3 items-center justify-center">
                  <ImSpinner9 className="animate-spin" />
                  Processing...
                </span>
              ) : (
                <p className="flex gap-4 items-center w-full">
                  <DSevenSvg />
                  <div>
                    <h3 className="font-medium text-left">Log Out</h3>
                    <span className="text-[15px] text-off-white">
                      End session
                    </span>
                  </div>
                </p>
              )}
            </button>
          </aside>

          {/* Outlet */}
          <main className="grow">
            {/* Profile info */}
            {isUpdating ? (
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
            )}

            <Outlet />
          </main>
        </div>

        {/* Overlay */}
        <div className="fixed -left-48 bottom-0 -z-20 w-[480px] md:w-[680px] 2xl:w-[880px] h-[300px] md:h-[350px] 2xl:h-[380px]  rotate-[-46.492deg] rounded-[741.5px] bg-[#db409846] blur-[98.25px]" />

        <div className="fixed -right-48 bottom-0 -z-20 w-[480px] md:w-[680px] 2xl:w-[880px] h-[300px] md:h-[350px] 2xl:h-[380px] rotate-[46.492deg] rounded-[741.5px] bg-[#db409846] blur-[98.25px]" />
      </div>
      <Footer />
      <ScrollRestoration />

      {/* Modal */}
      <Modal
        className="max-w-3xl"
        open={showBannerModal}
        onClose={() => setShowBannerModal(false)}
      >
        <BannerModal
          onClose={() => setShowBannerModal(false)}
          updateMutation={updateMutation}
          isUpdating={isUpdating}
        />
      </Modal>
    </>
  );
};

export default DashboardLayout;
