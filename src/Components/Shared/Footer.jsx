import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSocialMediaLinks } from "../../Hooks/api/dashboard_api";

const quickLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Review",
    path: "/customer-review",
  },
  {
    label: "Contact",
    path: "/contact-us",
  },
];

const informationLinks = [
  {
    label: "Shipping Policy",
    path: "/",
  },
  {
    label: "Return Policy",
    path: "/",
  },
  {
    label: "Privacy Policy",
    path: "/",
  },
  {
    label: "Terms of service",
    path: "/",
  },
];

const Footer = () => {
  const { data: socialLinks, isLoading: isSocialLinksLoading } =
    useSocialMediaLinks();
  return (
    <div className="bg-secondary-100 py-8">
      <div className="container space-y-6 md:space-y-13.5">
        <div className="flex max-md:flex-col justify-between gap-y-8 gap-x-5">
          {/* about us */}
          <div className="flex max-w-[460px] flex-col items-start gap-8">
            <h3 className="text-primary text-center text-2xl tracking-wide leading-[150%] font-police">
              ESCAPESHOP
            </h3>
            <div className="space-y-8">
              <p className="text-[#FEFFFF] text-sm md:text-lg font-normal leading-[150%]">
                Discover ethically sourced. Legal herbal smoking blends and
                wellness essentials crafted for the modern souls.
              </p>
            </div>
            {/* social links */}
            <div className="flex items-center gap-4">
              {socialLinks?.data?.map((link, index) => (
                <Link
                  to={link?.link}
                  key={index}
                  className="size-8 bg-[#FEFEFE] rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary transition duration-300"
                >
                  <img src={link?.icon} alt={link?.name} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between gap-y-8 gap-x-5 max-sm:flex-wrap">
            {/* quick Links */}
            <div className="space-y-3 sm:space-y-4 md:space-y-8">
              <h5 className="text-white text-lg font-medium leading-6 text-nowrap">
                Quick Links
              </h5>
              <div className="flex flex-col gap-2 md:gap-4">
                {quickLinks?.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="text-white text-sm font-normal leading-[150%] hover:text-primary transition duration-300 text-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* information Links */}
            <div className="space-y-2 sm:space-y-4 md:space-y-8">
              <h5 className="text-white text-lg font-medium leading-6 text-nowrap">
                Information Links
              </h5>
              <div className="flex flex-col gap-2 md:gap-4">
                {informationLinks?.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="text-white text-sm font-normal leading-[150%] hover:text-primary transition duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Contact Us */}
            <div className="space-y-2 sm:space-y-4 md:space-y-8">
              <h5 className="text-white text-lg font-medium leading-6">
                Connect With Us
              </h5>
              <div className="flex flex-col gap-2 md:gap-4">
                <a
                  href="mailto:hello@escapeshop.com"
                  className="text-white text-sm font-normal leading-[150%] hover:text-primary transition duration-300"
                >
                  hello@escapeshop.com
                </a>
                {/* <a
                href="tel: +1 (555) 123-4567"
                className="text-white text-sm font-normal leading-[150%] hover:text-primary transition duration-300"
              >
                +1 (555) 123-4567
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-primary"></div>
        <div className="flex max-sm:flex-col items-center justify-between text-white text-center text-sm font-normal leading-normal">
          <p>
            © 2025 <span className="text-primary">escapeshop</span> All rights
            reserved.
          </p>
          <p>Terms & Conditions Privacy Policy Sitemap Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
