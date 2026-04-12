import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import footerBg from "../assets/footer_bg.png";
import {
  FacebookSvg,
  Instagram,
  TwitterSvg,
  Youtube,
} from "./Svg/SvgContainer";
import { Link, useLocation } from "react-router-dom";
import { useFooterData } from "../Hooks/api/cms_api";

const footerData = {
  shop: [
    { path: "/", text: "Start Your Order →" },
    { path: "/auth/signin", text: "Log in" },
    { path: "/auth/register", text: "Signup" },
  ],
};

const Footer = () => {
  const location = useLocation()?.pathname;
  const { data: footerInfo } = useFooterData();

  return (
    <footer className="mt-20 relative">
      {/* Upper part */}
      <div className="container">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-7 xl:gap-10 lg:p-5 border-t-0 border-b-0 lg:border-r lg:border-l border-gray-500 rounded-2xl relative">
          {/* Column 1 */}
          <div>
            <h2 className="mb-5 flex gap-2 items-center xl:text-lg font-semibold">
              <img src={f1} alt="f1" />
              <span>Products</span>
            </h2>

            <div className="space-y-3.5 md:space-y-5">
              {footerInfo?.data?.product_section?.map(item => (
                <Link
                  to={`/sticker-type/${item?.id}`}
                  key={item?.id}
                  className="text-off-white text-sm block hover:underline"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="mb-5 flex gap-2 items-center xl:text-lg font-semibold">
              <img src={f2} alt="f2" />
              <span>Content</span>
            </h2>

            <div className="space-y-3.5 md:space-y-5">
              {footerInfo?.data?.dynamic_page?.map(item => (
                <Link
                  to={`/dynamic/${item?.page_slug}`}
                  key={item?.page_slug}
                  className="text-off-white text-sm block hover:underline"
                >
                  {item?.page_title}
                </Link>
              ))}

              <Link
                to="/shipping-process"
                className="text-off-white text-sm block hover:underline"
              >
                Shipping process
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="mb-5 flex gap-2 items-center xl:text-lg font-semibold">
              <img src={f3} alt="f3" />
              <span>Support</span>
            </h2>

            <div className="space-y-3.5 md:space-y-5">
              <a
                href={`mailto:${footerInfo?.data?.email}`}
                className="text-off-white text-sm block"
              >
                Help
              </a>

              <Link
                to="/return"
                className="text-off-white text-sm block hover:underline"
              >
                Returns
              </Link>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="mb-5 flex gap-2 items-center xl:text-lg font-semibold">
              <img src={f4} alt="f4" />
              <span>Shop</span>
            </h2>

            <div className="space-y-3.5 md:space-y-5">
              {footerData?.shop?.map(item => (
                <Link
                  to={item?.path}
                  key={item?.path}
                  className="text-off-white text-sm block hover:underline"
                >
                  {item?.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5 */}
          <div className="hidden xl:block"></div>

          {/* Column 6 */}
          <div>
            <h2 className="mb-5 flex gap-2 items-center xl:text-lg font-semibold">
              <img src={f5} alt="f5" />
              <span>Our Mission</span>
            </h2>

            <p className="text-off-white mb-5 text-sm">
              {footerInfo?.data?.our_mission}
            </p>

            <div className="flex gap-5 items-center">
              {footerInfo?.data?.social_media?.map((item, idx) => (
                <a key={idx} target="_blank" href={item?.profile_link}>
                  {item?.social_media === "facebook" && <FacebookSvg />}
                  {item?.social_media === "twitter" && <TwitterSvg />}
                  {item?.social_media === "instagram" && <Instagram />}
                  {item?.social_media === "youtube" && <Youtube />}
                </a>
              ))}
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute left-10 bottom-32 w-[1033.598px] h-[90.009px] rotate-[172.499deg] rounded-[741.5px] bg-[#db40985b] blur-[98.25px] -z-10 hidden 2xl:block" />
        </div>
      </div>

      {/* Middle part */}
      <div className="container py-7 md:py-10">
        <figure className="w-full">
          <img src={footerBg} className="w-full h-full object-cover" />
        </figure>
      </div>

      {/* Lower part */}
      <div className="container pb-5">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
          <div className="flex gap-10 items-center">
            {footerInfo?.data?.dynamic_page?.map(item => (
              <Link
                to={`/dynamic/${item?.page_slug}`}
                key={item?.page_slug}
                className="text-off-white text-sm block hover:underline"
              >
                {item?.page_title}
              </Link>
            ))}
          </div>

          <p className="text-off-white text-sm">
            {footerInfo?.data?.copyright}
          </p>
        </div>
      </div>

      {(location === "/" ||
        location === "/terms" ||
        location === "/copyright" ||
        location === "/privacy-policy" ||
        location === "/cookie-policy") && (
        <>
          {/* Overlay */}
          <div className="absolute left-0 -top-72 -z-20 w-[600px] 2xl:w-[880px] h-[250px] 2xl:h-[423px] -rotate-[-46.492deg] rounded-[741.5px] bg-[#db409846] blur-[120px] hidden lg:block" />

          <div className="absolute right-0 -top-72 -z-20 w-[600px] 2xl:w-[880px] h-[250px] 2xl:h-[423px] rotate-[-46.492deg] rounded-[741.5px] bg-[#db409846] blur-[120px] hidden lg:block" />
        </>
      )}
    </footer>
  );
};

export default Footer;
