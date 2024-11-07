import { admissionHeroCarouselItems } from '@/data'
import { Footer, Header, HeroCarousel, NavbarPlaceholder, AllCurriculums } from '@/sections'
import React from 'react'

const Curriculum = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarousel carouselItems={admissionHeroCarouselItems} />
        <AllCurriculums />
      </main>
      <Footer />
    </>
  )
}

export default Curriculum