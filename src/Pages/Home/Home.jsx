import React from 'react'
import HeroSection from '../../Components/HomePage/HeroSection'
import Navbar from '../../Components/Shared/Navbar'
import ChooseYourVibe from '../../Components/HomePage/ChooseYourVibe'
import AboutUs from '../../Components/HomePage/AboutUs'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ChooseYourVibe />
      <AboutUs />
    </div>
  )
}

export default Home
