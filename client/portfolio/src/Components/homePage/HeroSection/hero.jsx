
import React from 'react';
import './hero.scss'; // Import your SCSS file
import bgvideo from '../../../Assets/videos/herobv.mp4'
import { useTheme } from '../../../Themes/themeContext';

const HeroSection = () => {
    const theme = useTheme();
    return (
        <div className="hero">
            <video autoPlay muted loop id="video-bg">
                <source src={bgvideo} type="video/mp4" />
            </video>
            <div className="hero-content">
                <h1>Code Wizard</h1>
                <p>Unleashing the Magic of MERN Stack <br /> and Huawei Cloud Services to Create Wonders in the Digital Realm!</p>
                <div className='btn'>
                    <a href="#portfolio" >Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
