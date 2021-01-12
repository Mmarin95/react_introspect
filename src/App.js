import React from 'react'
import { Header } from './header'
import { Products } from './products'
import { Contact_Form } from './contact_form'
import { Checkout_Screen } from './checkout_screen'

import './App.css'

function App() {
  return (
    <>
      <div id="content">
        <Header />
        <Products />
        <Contact_Form />
      </div>
      <>
        <Checkout_Screen />
      </>
    </>
  )
}

export default App
