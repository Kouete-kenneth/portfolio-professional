import React from "react";
import './home.scss'
import HeroSection from "./HeroSection/hero";
import HomeAbout from "./homeAbout/home-about";
import HomeSkills from "./HomeSkill/home-skill";
import Banner from "./Banner/banner";
import AnimeVideo from "./AnimeVideo/anime";
import EventSlider from './EventSlider/event.jsx'

const Home=()=>{
    return(
        <div className="home" style={{overflow:"hidden auto", maxHeight:"100vh",marginTop: "-5px",marginLeft: "-7px"}}>
           <HeroSection/>
           <HomeAbout/>
           <HomeSkills/>
           <AnimeVideo/>
           <EventSlider/>
           <Banner/>
           
        </div>
    )
}
export default Home;
// style={{overflowY:"scroll",left:"0px",top:"-5px",right:"-5px",position:"relative"}}