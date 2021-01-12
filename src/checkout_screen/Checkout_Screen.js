import React from 'react'

import './Checkout_Screen.css'
import check_icon from './assets/check_icon.png'

const Checkout_Screen = ({ checkoutStyle }) => {
    return (
        <div className="checkoutScreen" style={checkoutStyle}>
            <div className="checkoutScreen__content">
                <img className="checkoutScreen__img" src={check_icon}></img>
                <div className="checkoutScreen__block">
                    <h1 className="checkoutScreen__block-title">Thank You!</h1>
                    <p className="checkoutScreen__block-intro">Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.</p>
                </div>
            </div>

        </div >
    );
};

export { Checkout_Screen }