import { examPolicyHeroCarouselItems } from '@/data'
import { ExamNotice, ExamPolicyOverview, Footer, Header, HeroCarousel, NavbarPlaceholder } from '@/sections'
import React from 'react'

const ExamPolicy = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <HeroCarousel carouselItems={examPolicyHeroCarouselItems} />
        <ExamNotice />
        <ExamPolicyOverview />
      </main>
      <Footer />
    </>
  )
}

export default ExamPolicy