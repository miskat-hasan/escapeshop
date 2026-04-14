import React from "react";
import HeroSection from "../../Components/HomePage/HeroSection";
import ChooseYourVibe from "../../Components/HomePage/ChooseYourVibe";
import AboutUs from "../../Components/HomePage/AboutUs";
import FeaturedProducts from "../../Components/HomePage/FeaturedProducts";
import TopReserve from "../../Components/HomePage/TopReserve";
import BudgetFriendly from "../../Components/HomePage/BudgetFriendly";
import CustomerReview from "../../Components/HomePage/CustomerReview";
import ContactInformation from "../../Components/Common/ContactInformation";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ChooseYourVibe />
      <AboutUs />
      <FeaturedProducts />
      <TopReserve />
      <BudgetFriendly />
      <CustomerReview />
      <ContactInformation />
    </div>
  );
};

export default Home;
