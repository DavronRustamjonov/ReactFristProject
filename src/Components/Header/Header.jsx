import React from "react";
import Header__logo from "../../images/header__logo.svg";
import "./Header.css"
const Header=()=>{
    return(
           <div className="header">
        <div className="container header__container">
          <a href="#"><img className='header__logo' src={Header__logo} alt="" /></a>
          <ul className="header__list">
            <li className="header__item"><a className="header__link" href="#">Home</a></li>
            <li className="header__item"><a className="header__link" href="#">About</a></li>
            <li className="header__item"><a className="header__link" href="#">Contact</a></li>
            <li className="header__item"><a className="header__link" href="#">Blog</a></li>
            <li className="header__item"><a className="header__link" href="#">Careers</a></li>
          </ul>
          <a href="#" className="header__next-link">Request Invite</a>
        </div>
      </div>
    )
}
export default Header;