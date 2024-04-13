import React from "react";
import './header.scss'
import logo from '../../Assets/images/logo.jpeg'
import Button from "../Button/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard, faHome, faProjectDiagram, faUserGear } from '@fortawesome/free-solid-svg-icons'
const Header=()=>{
    return(
        <>
            {/* <header id="header" style={{backgroundColor:"rgba(116, 156, 166, 0.6)",color:"rgba(255, 255, 255, 1)",minHeight:"15vh",overflow:"hidden",zIndex:"9999",borderRadius:"3rem",position:"absolute",top:"1rem",right:"2rem",left:"2rem",padding:'0.8rem'}}>
                <div style={{backgroundColor:"blue",borderRadius:"3rem",overflow:"hidden"}} >
                    <section style={{display:'flex',justifyItems:'center',alignItems:'center',gap:'1.5rem',position:"absolute",left:"0.8rem",top:"50%",transform:"translateY(-50%)"}}>
                        <div style={{width:'7rem',height:'4.3rem',overflow:'hidden',borderRadius:'40px'}}>
                            <img style={{objectFit:'cover',width:'100%',height:'100%'}} src={logo} alt="logo" />
                        </div>
                        <div>
                            <span><span>K</span>Kenn<span>Dev</span></span>
                        </div>
                    </section>
                    <section style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",display:'flex',justifyItems:'center',alignItems:'center',gap:'1.5rem',padding:'0.8rem'}}>
                        <div style={{display:"inline-flex", gap:"5px"}}><span><FontAwesomeIcon icon={faHome} /></span><span>Home</span></div>
                        <div style={{display:"inline-flex", gap:"5px"}}><span><FontAwesomeIcon icon={faUserGear}/></span><span>About</span></div>
                        <div style={{display:"inline-flex", gap:"10px"}}><span><FontAwesomeIcon icon={faProjectDiagram}/></span><span>Projects</span></div>
                        <div style={{display:"inline-flex", gap:"10px"}}><span><FontAwesomeIcon icon={faContactCard}/></span><span>Contact</span></div>
                    </section>
                    <section style={{position:"absolute",right:"0.8rem",top:"50%",transform:"translateY(-50%)"}}>
                        <div>
                            <Button width="8.5rem" height="4.3rem" BorderRadius="50px" text="Explore Services"/>
                        </div>
                    </section>
                </div>
            </header> */}
            <header id="header">
                <div className="header-container">
                    <section className="logo-section">
                        <div className="logo-wrapper">
                            <img className="logo-image" src={logo} alt="logo" />
                        </div>
                        <div className="logo-text">
                            <span><span>K</span>Kenn<span>Dev</span></span>
                        </div>
                    </section>
                    <section className="menu-section">
                        <div className="menu-item">
                            <span><FontAwesomeIcon icon={faHome} /></span><span>Home</span>
                        </div>
                        <div className="menu-item">
                            <span><FontAwesomeIcon icon={faUserGear}/></span><span>About</span>
                        </div>
                        <div className="menu-item">
                            <span><FontAwesomeIcon icon={faProjectDiagram}/></span><span>Projects</span>
                        </div>
                        <div className="menu-item">
                            <span><FontAwesomeIcon icon={faContactCard}/></span><span>Contact</span>
                        </div>
                    </section>
                    <section className="explore-section">
                        <div>
                            <Button width="8.5rem" height="4.3rem" BorderRadius="50px" text="Explore Services"/>
                        </div>
                    </section>
                </div>
            </header>

        </>
    )
}

export default Header;