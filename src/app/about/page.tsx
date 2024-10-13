import { AboutFounder, AboutMission, Header } from '@/sections'
import React from 'react'

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutMission />
        <AboutFounder />
      </main>
    </>
  )
}

export default About