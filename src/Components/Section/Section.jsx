import React from "react";
import Section__img from '../../images/section__img.svg';
import Section__img2 from '../../images/section__img2.svg';
import Section__img3 from '../../images/section__img3.svg';
import Section__img4 from '../../images/section__img4.svg';
import "./Section.css"
const Section=()=>{
    return(
       <div className="section">
        <div className="container section__container">
          <h1 className="section__title">Why choose Easybank?</h1>
          <p className="section__text">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
          <ul className="section__list">
            <li className="section__item">
              <img src={Section__img} alt="logo" />
              <h3 className="section__next-title">Online Banking</h3>
              <p className="section__next-text">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </li>
            <li className="section__item">
             <img src={Section__img2} alt="logo" />
              <h3 className="section__next-title">Simple Budgeting</h3>
              <p className="section__next-text">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </li>
            <li className="section__item">
              <img src={Section__img3} alt="logo" />
              <h3 className="section__next-title">Fast Onboarding</h3>
              <p className="section__next-text">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </li>
            <li className="section__item">
              <img src={Section__img4} alt="logo" />
              <h3 className="section__next-title">Open API</h3>
              <p className="section__next-text">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </li>
          </ul>
        </div>
      </div>
    )
}
export default Section;