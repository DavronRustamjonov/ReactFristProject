import React from "react";
import Service__img1 from '../../images/service__img1.svg';
import Service__img2 from '../../images/service__img2.svg';
import Service__img3 from '../../images/service__img3.svg';
import Service__img4 from '../../images/service__img4.svg';
import "./Service.css"
const Service=()=>{
    return(
        <div className="service">
        <div className="container service__container">
          <h1 className="service__first-title">Latest Articles</h1>
          <div className="slider">
            <ul className='service__list'>
           <li className='service__item'>  <img className="service__img" src={Service__img1} alt="article" />
                <h6 className="service__title">By Claire Robinson</h6>
                <h3 className="service__next-title">Receive money in any currency with no fees</h3>
                <p className="service__text">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
           </li>
           <li className='service__item'>  <img className="service__img" src={Service__img2} alt="article" />
                <h6 className="service__title">By Claire Robinson</h6>
                <h3 className="service__next-title">Receive money in any currency with no fees</h3>
                <p className="service__text">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
           </li>
           <li className='service__item'>
           <img className="service__img" src={Service__img3} alt="article" />
                <h6 className="service__title">By Claire Robinson</h6>
                <h3 className="service__next-title">Receive money in any currency with no fees</h3>
                <p className="service__text">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
           
           </li>
           <li className='service__item'>
           <img className="service__img" src={Service__img4} alt="article" />
                <h6 className="service__title">By Claire Robinson</h6>
                <h3 className="service__next-title">Receive money in any currency with no fees</h3>
                <p className="service__text">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
           </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default Service;