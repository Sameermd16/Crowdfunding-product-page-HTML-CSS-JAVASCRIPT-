import React from 'react'
import mobileHero from "../images/image-hero-mobile.jpg"
import desktopHero from "../images/image-hero-desktop.jpg"

const Showcase = () => {
  return (
    <>
    <section className="md:hidden">
        <img src={mobileHero} alt="mobile_background_img"/>
    </section>
    <section className="hidden md:block">
      <img src={desktopHero} alt="desktop_hero"/>
    </section>
    </>
  )
}

export default Showcase