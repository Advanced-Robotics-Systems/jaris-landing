import { Footer, Header, NavbarPlaceholder, PaymentContact, PaymentOnline } from '@/sections'
import React from 'react'

const Payment = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <main>
        <PaymentOnline />
        <PaymentContact />
      </main>
      <Footer />
    </>
  )
}

export default Payment