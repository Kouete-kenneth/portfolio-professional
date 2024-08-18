import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.scss';
import Button from '../../Button/button';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1>ELevate Your Online Presence With Bespoke Solution By Tansforming Your Ideas Into Reality With Seamless Development!</h1> 
            </div>
            <div className='banner-button'>
                <NavLink className="banner-btn" to="/Contact">
                    <Button width="100%" height="100%" text="Let's Talk" BorderRadius="50px" />
                </NavLink>
            </div>
        </div>
    );
}

export default Banner;
