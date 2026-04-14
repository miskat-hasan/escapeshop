import React from "react";
import PageHeader from "../Components/Common/PageHeader";
import ReviewCard from "../Components/ReviewCard";
import ContactInformation from "../Components/Common/ContactInformation";

const ContactUsPage = () => {
  return (
    <div>
      {/* header */}
      <div
        className={`relative h-[440px] 2xl:h-[500px] flex items-end pb-11 justify-center bg-cover bg-bottom bg-[linear-gradient(111deg,rgba(0,33,21,0.8)_45.72%,rgba(12,53,60,0.2)_98.54%),url('/contact-us-bg.png')]`}
      >
        <div className="relative z-10 p-8 container">
          <h1 className="text-white text-center font-['Playfair_Display'] text-[64px] font-semibold leading-[120%] mb-8">
            Contact Us
          </h1>
          <p className="text-[#B4C0C3] text-center text-2xl font-normal leading-[150%] max-w-[1050px] mx-auto">
            Connect with us for any questions or feedback. Experience prompt
            support and personalized assistance for all your THCA needs.
          </p>
        </div>
        <div className="absolute w-full h-[180px] -bottom-5 bg-[url('/hero-bottom-gradient.png')] bg-no-repeat" />
      </div>

      <ContactInformation />
    </div>
  );
};

export default ContactUsPage;
