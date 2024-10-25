import { admissionHeroCarouselItems } from '@/data'
import { AdmissionFees, FJarisOverview, Footer, Header, HeroCarousel, NavbarPlaceholder, SchoolAdmissionCTA } from '@/sections'
import React from 'react'

const FJARIS = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarousel carouselItems={admissionHeroCarouselItems} />
        <FJarisOverview />
        <SchoolAdmissionCTA />
        <AdmissionFees />
      </main>
      <Footer />
    </>
  )
}

export default FJARIS