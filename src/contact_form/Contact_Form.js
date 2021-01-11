import React from 'react'

import './Contact_Form.css'

const Contact_Form = () => {
    return (
        <div className="contactForm">

            <h3 className="contactForm__intro">Kontakt</h3>

            <form className="contactForm__form" action="#">

                <select className="contactForm__select" id="salutation" name="salutation">
                    <option value="" disabled selected>Salutation</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                </select>

                <input className="contactForm__name" placeholder="First Name" type="text" id="fname" name="fname" />

                <input className="contactForm__name" placeholder="Last Name" type="text" id="lname" name="lname" />

                <textarea className="contactForm__message" placeholder="Message" name="message" rows="10" cols="30">
                </textarea>

                <div className="contactForm__conditions">
                    <input type="checkbox" id="conditions" name="conditions" value="conditions" />
                    <label for="conditions">I have read the terms and conditions and accept them.</label>
                </div>

                <div className="contactForm__submit">
                    <input className="contactForm__submitButton" type="submit" value="Send information" />
                </div>
            </form>
        </div>
    );
};

export { Contact_Form }