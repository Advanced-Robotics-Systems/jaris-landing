import { examPolicyHeroCarouselItems } from '@/data'
import { ExamNotice, Footer, Header, HeroCarousel, NavbarPlaceholder } from '@/sections'
import React from 'react'

const ExamPolicy = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarousel carouselItems={examPolicyHeroCarouselItems} />
        <ExamNotice />
      </main>
      <Footer />
    </>
  )
}

export default ExamPolicy