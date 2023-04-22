import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
      <div class="main_body">
        <video autoplay muted loop>
          <source src="assets/img/Final Moonetized Background.mp4" />
        </video>
        <div class="overlay_wrapper">
          <Header />
          <HeroSection />
        </div>
      </div>
    </>
  )
}

export default Home