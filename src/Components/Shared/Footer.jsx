import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";

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
    path: "/review",
  },
  {
    label: "Contact",
    path: "/contact",
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
  return (
    <div className="bg-secondary-100 py-8">
      <div className="container space-y-13.5">
        <div className="flex justify-between">
          {/* about us */}
          <div className="flex w-[460px] flex-col items-start gap-8 shrink-0">
            <h3 className="text-primary text-center font-['Post_No_Bills_Colombo_ExtraBold'] text-2xl font-extrabold leading-[150%]">
              ESCAPESHOP
            </h3>
            <div className="space-y-8">
              <p className="text-[#FEFFFF] text-lg font-normal leading-[150%]">
                Discover ethically sourced. Legal herbal smoking blends and
                wellness essentials crafted for the modern souls.
              </p>
            </div>
            {/* social links */}
            <div className="flex items-center gap-4">
              <div className="size-8 bg-[#FEFEFE] rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary transition duration-300">
                <FaFacebookF />
              </div>
              <div className="size-8 bg-[#FEFEFE] rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary transition duration-300">
                <FaLinkedinIn />
              </div>
              <div className="size-8 bg-[#FEFEFE] rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary transition duration-300">
                <LuInstagram />
              </div>
              <div className="size-8 bg-[#FEFEFE] rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary transition duration-300">
                <FaTwitter />
              </div>
            </div>
          </div>
          {/* quick Links */}
          <div className="space-y-8">
            <h5 className="text-white text-base font-medium leading-6">
              Quick Links
            </h5>
            <div className="flex flex-col gap-4">
              {quickLinks?.map((item, index) => (
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
          {/* information Links */}
          <div className="space-y-8">
            <h5 className="text-white text-base font-medium leading-6">
              Information Links
            </h5>
            <div className="flex flex-col gap-4">
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
          <div className="space-y-8">
            <h5 className="text-white text-base font-medium leading-6">
              Connect With Us
            </h5>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@escapeshop.com"
                className="text-white text-sm font-normal leading-[150%] hover:text-primary transition duration-300"
              >
                hello@escapeshop.com
              </a>
              <a
                href="tel: +1 (555) 123-4567"
                className="text-white text-sm font-normal leading-[150%] hover:text-primary transition duration-300"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-primary"></div>
        <div className="flex items-center justify-between text-white text-center text-sm font-normal leading-normal">
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
