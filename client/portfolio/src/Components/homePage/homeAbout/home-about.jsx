import React from 'react';
import './home-about.scss';

const HomeAbout = () => {
    return (
        <div className="tech-sorcerer">
            <div className='title-wrapper'>
                <h1 className="title">Meet the Tech Sorcerer</h1>
                <p>"see him see solution"</p>
            </div>
            <div className='content-wrapper'>
                <p className="description">
                    Greetings, fellow digital voyagers! I am the almighty Full Stack Developer and Huawei Cloud Service 
                    Enchanter on a quest to craft the most enchanting MERN Stack websites.
                </p>
                <p className="description">
                    With a sprinkle of code and a dash of cloud magic, I bring your wildest digital dreams to life. Let's 
                    embark on this epic journey together and create digital marvels that defy imagination!
                </p>
                <p className="description">
                    Join me in the realm of innovation where every line of code is a stroke of genius and every cloud 
                    service is a gateway to infinite possibilities.
                </p>
            </div>
        </div>
    );
}

export default HomeAbout;