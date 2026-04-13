import React from 'react'
import HeroSection from '../../Components/HomePage/HeroSection'
import Navbar from '../../Components/Shared/Navbar'
import ChooseYourVibe from '../../Components/HomePage/ChooseYourVibe'
import AboutUs from '../../Components/HomePage/AboutUs'
import FeaturedProducts from '../../Components/HomePage/FeaturedProducts'
import TopReserve from '../../Components/HomePage/TopReserve'
import BudgetFriendly from '../../Components/HomePage/BudgetFriendly'
import CustomerReview from '../../Components/HomePage/CustomerReview'
import ContactInformation from '../../Components/HomePage/ContactInformation'
import Footer from '../../Components/Shared/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ChooseYourVibe />
      <AboutUs />
      <FeaturedProducts />
      <TopReserve />
      <BudgetFriendly />
      <CustomerReview />
      <ContactInformation />
      <Footer />
    </div>
  )
}

export default Home
