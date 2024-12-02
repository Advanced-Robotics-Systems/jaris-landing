import { WhatsappWidget } from '@/components'
import { Footer, Header, NavbarPlaceholder, PaymentContact, PaymentOnline } from '@/sections'
import React from 'react'

const Payment = () => {
  return (
    <>
      <Header />
      <NavbarPlaceholder />
      <WhatsappWidget/>
      <main>
        <PaymentOnline />
        <PaymentContact />
      </main>
      <Footer />
    </>
  )
}

export default Payment