import React from 'react';
import './anime.scss'; // Import your SCSS file
import bgvideo from '../../../Assets/videos/intouchbgv.mp4'
import { useTheme } from '../../../Themes/themeContext';
import Button from '../../Button/button';

const AnimeVideo = () => {
    const theme = useTheme();
    return (
        <div className="in-touch">
            <video autoPlay muted loop id="video-bg">
                <source src={bgvideo} type="video/mp4" />
            </video>
            
            <div className="in-touch-content">
                <h1>Kenneth Is My Name</h1>
                <a className='in-touch-btn'>
                    <Button width="100%" height="100%" BorderRadius="50px" text="Click For More"/>
                </a>
            </div>
        </div>
    );
}; 

export default AnimeVideo;
