import { facilitiesHeroCarouselItems } from '@/data'
import { AllFacilities, CTASchools, FacilitiesOverview, Footer, Header, HeroCarousel, NavbarPlaceholder } from '@/sections'
import React from 'react'

const Facilities = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarousel carouselItems={facilitiesHeroCarouselItems} />
        <FacilitiesOverview />
        <AllFacilities />
        <CTASchools />
      </main>
      <Footer />
    </>
  )
}

export default Facilities