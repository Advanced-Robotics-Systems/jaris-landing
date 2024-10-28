import { examPolicyHeroCarouselItems } from '@/data'
import { ExamNotice, ExamPolicies, ExamPolicyOverview, Footer, Header, HeroCarousel, NavbarPlaceholder } from '@/sections'
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
        <ExamPolicies />
      </main>
      <Footer />
    </>
  )
}

export default ExamPolicy