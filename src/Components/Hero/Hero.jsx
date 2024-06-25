import React from "react";
import Hero_desktop from '../../images/12.svg';
import Hero_phones from '../../images/hero-phones-desktop.svg';
import "./Hero.css"
const Hero=()=>{
    return(
       <div className="hero">
        <div className="container hero__container">
          <h1 className="hero__title">Next generation digital banking</h1>
          <p className="hero__text">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <button className="hero__btn">Request Invite</button>
          <img className="hero__bg" src={Hero_desktop} alt="background" />
          <img className="hero__img" src={Hero_phones} alt="phones" />
        </div>
      </div>
    )
}
export default Hero;