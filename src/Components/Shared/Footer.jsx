"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  useGetFooterContents,
  useSocialMediaLinks,
} from "../../Hooks/api/dashboard_api";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Review", path: "/customer-review" },
  { label: "Contact", path: "/contact-us" },
];

const informationLinks = [
  { label: "Shipping Policy", path: "/" },
  { label: "Return Policy", path: "/" },
  { label: "Privacy Policy", path: "/" },
  { label: "Terms of service", path: "/" },
];

const Footer = () => {
  const { data: socialLinks, isLoading: isSocialLinksLoading } = useSocialMediaLinks();
  const { data: footerContents, isLoading: isFooterContentsLoading } = useGetFooterContents();

  return (
    <div className="bg-secondary-100 py-8">
      <div className="container space-y-6 md:space-y-13.5">
        <div className="flex max-md:flex-col justify-between gap-y-8 gap-x-5">
          
          {/* About Us Section */}
          <div className="flex max-w-[460px] flex-col items-start gap-8">
            <h3 className="text-primary text-center text-2xl tracking-wide leading-[150%] font-police">
              ESCAPESHOP
            </h3>
            
            <div className="w-full space-y-4">
              {isFooterContentsLoading ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  <div className="h-4 bg-white/10 rounded w-4/6"></div>
                </div>
              ) : (
                <div className="text-[#FEFFFF] text-sm md:text-lg font-normal leading-[150%]">
                  {footerContents?.data?.description && (
                    <div dangerouslySetInnerHTML={{ __html: footerContents.data.description }} />
                  )}
                </div>
              )}
            </div>

            {/* Social Links Skeleton */}
            <div className="flex items-center gap-4">
              {isSocialLinksLoading ? (
                [1, 2, 3, 4].map((i) => (
                  <div key={i} className="size-8 bg-white/10 rounded-full animate-pulse"></div>
                ))
              ) : (
                socialLinks?.data?.map((link, index) => (
                  <Link
                    to={link?.link}
                    key={index}
                    className="size-8 bg-[#FEFEFE] rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary transition duration-300"
                  >
                    <img src={link?.icon} alt={link?.name} className="size-4" />
                  </Link>
                ))
              )}
            </div>
          </div>

          <div className="flex justify-between gap-y-8 gap-x-5 max-sm:flex-wrap">
            {/* Quick Links (Static - No Skeleton needed) */}
            <div className="space-y-3 sm:space-y-4 md:space-y-8">
              <h5 className="text-white text-lg font-medium leading-6 text-nowrap">Quick Links</h5>
              <div className="flex flex-col gap-2 md:gap-4">
                {quickLinks.map((item, index) => (
                  <Link key={index} to={item.path} className="text-white text-sm font-normal hover:text-primary transition duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Information Links (Static) */}
            <div className="space-y-2 sm:space-y-4 md:space-y-8">
              <h5 className="text-white text-lg font-medium leading-6 text-nowrap">Information Links</h5>
              <div className="flex flex-col gap-2 md:gap-4">
                {informationLinks.map((item, index) => (
                  <Link key={index} to={item.path} className="text-white text-sm font-normal hover:text-primary transition duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-2 sm:space-y-4 md:space-y-8">
              <h5 className="text-white text-lg font-medium leading-6">Connect With Us</h5>
              <div className="flex flex-col gap-2 md:gap-4">
                {isFooterContentsLoading ? (
                  <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
                ) : (
                  <a
                    href={`mailto:${footerContents?.data?.email}`}
                    className="text-white text-sm font-normal hover:text-primary transition duration-300"
                  >
                    {footerContents?.data?.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-primary"></div>

        {/* Bottom Bar */}
        <div className="flex max-sm:flex-col items-center justify-between text-white text-center text-sm font-normal gap-4">
          {isFooterContentsLoading ? (
            <div className="h-4 w-48 bg-white/10 rounded animate-pulse"></div>
          ) : (
            <p>{footerContents?.data?.copyright_text}</p>
          )}
          <p>Terms & Conditions Privacy Policy Sitemap Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;