import React, { Component } from 'react'
import { Header } from './header'
import { Products } from './products'
import { Contact_Form } from './contact_form'
import { Checkout_Screen } from './checkout_screen'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = { contentStyle: { 'filter': 'initial' }, checkoutStyle: { 'display': 'none' } };
  checkoutState = { contentStyle: { 'filter': 'blur(3px)' }, checkoutStyle: { 'display': 'initial' } };

  handleCheckout = () => {
    this.setState(this.checkoutState);
    setTimeout(() => {
      this.setState(this.initialState);
    }, 3000);
  }

  render() {
    return (
      <>
        <div id="content" style={this.state.contentStyle}>
          <Header />
          <Products />
          <Contact_Form
            onclick={this.handleCheckout} />
        </div>
        <Checkout_Screen
          checkoutStyle={this.state.checkoutStyle}
        />
      </>
    );
  }
}

export default App

// function App() {
//   return (
//     <>
//       <div id="content">
//         <Header />
//         <Products />
//         <Contact_Form />
//       </div>
//       <Checkout_Screen />
//     </>
//   )
// }