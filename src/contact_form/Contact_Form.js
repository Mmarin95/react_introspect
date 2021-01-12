import React from 'react'

import './Contact_Form.css'

const Contact_Form = () => {
    return (
        <div className="contactForm">

            <h3 className="contactForm__intro">Kontakt</h3>

            <form className="contactForm__form" action="#">

                <div className="contactForm__select">
                    <label htmlFor="salutation" className="contactForm__name__placeholder">Salutation</label>
                    <select className="contactForm__select__input" id="salutation" name="salutation">
                        {/* <option className="select_placeholder" value="" disabled selected>Salutation</option> */}
                        <option value="mr">Mr.</option>
                        <option value="mrs">Mrs.</option>
                    </select>
                </div>

                <div className="contactForm__name">
                    <label htmlFor="fname" className="contactForm__name__placeholder">First Name</label>
                    <input className="contactForm__name__input" type="text" id="fname" name="fname" />
                </div>

                <div className="contactForm__name">
                    <label htmlFor="lname" className="contactForm__name__placeholder">Last Name</label>
                    <input className="contactForm__name__input" type="text" id="lname" name="lname" />
                </div>

                <div className="contactForm__message">
                    <label htmlFor="message" className="contactForm__name__placeholder">Message</label>
                    <textarea className="contactForm__message__textarea" id="message" name="message" rows="5" cols="60">
                    </textarea>
                </div>


                <div className="contactForm__conditions">
                    <input type="checkbox" id="conditions" name="conditions" value="conditions" />
                    {/* <label htmlFor="conditions"></label> */}
                    <span>I have read the terms and conditions and accept them.</span>
                </div>

                <div className="contactForm__submit">
                    <label htmlFor="submit" hidden>Send</label>
                    <input id="submit" className="contactForm__submitButton" type="submit" value="Send information" />
                </div>
            </form>
        </div>
    );
};

export { Contact_Form }