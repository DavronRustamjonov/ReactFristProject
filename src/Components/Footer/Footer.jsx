import React from "react";
import Footer__link1 from '../../images/footer__link1.svg';
import Footer__link2 from '../../images/footer__link2.svg';
import Footer__link3 from '../../images/footer__link3.svg';
import Footer__link4 from '../../images/footer__link4.svg';
import Footer__link5 from '../../images/footer__link5.svg';
import Footer__logo from '../../images/footer__logo.svg';
import "./Footer.css"
const Footer=()=>{
    return(
      <div className="footer">
        <div className="container footer__container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#"><img className="footer__logo" src={Footer__logo} alt="logo" /></a> <br /><br />
              <br />
              <span>
                <a className="footer__link" href="#"><img src={Footer__link1} alt="link" /></a>
                <a className="footer__link" href="#"><img src={Footer__link2} alt="link" /></a>
                <a className="footer__link" href="#"><img src={Footer__link3} alt="link" /></a>
                <a className="footer__link" href="#"><img src={Footer__link4} alt="link" /></a>
                <a className="footer__link" href="#"><img src={Footer__link5} alt="link" /></a>
              </span>
            
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">About Us</a><br/><br />
              <a className="footer__link" href="#">Contact</a><br/> <br />
              <a className="footer__link" href="#">Blog</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Careers</a><br /><br />
              <a className="footer__link" href="#">Support</a><br /> <br />
              <a className="footer__link" href="#">Privacy Policy</a>
            </li>
            <li className="footer__item">
              <a className="footer__next-link" href="#">Request Invite</a>
              <p className="footer__text">© Easybank. All Rights Reserved</p>
            </li>
          </ul>
        </div>
      </div>
    )
}
export default Footer;