import React, { useEffect, useState } from "react";
import './header.scss'
import logo from '../../Assets/images/logo.jpeg'
import Button from "../Button/button";
import {ToggleClass} from "../../utilities/classManagement.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faBagShopping, faContactCard, faCross, faHome, faProjectDiagram, faTimes, faUserGear } from '@fortawesome/free-solid-svg-icons'
const Header=()=>{
     const [active, setActive]=useState(false)
     const handleOpenMenu=(e)=>{
        ToggleClass('active',"menu-btn");
        ToggleClass('mobile',"disappear-content");
        setActive(!active);
        e.preventDefault();
     }
     const handleCloseMenu=()=>{
        setActive(false)
     }
    return(
        <>
            <div id="header">
                <div className="header-container">
                    <section className="logo-section">
                        <div className="logo-wrapper">
                            <img className="logo-image" src={logo} alt="logo" />
                        </div>
                        <div className="logo-text">
                            <span><span>K</span>Kenn<span>Dev</span></span>
                        </div>
                    </section>
                    <section className="disappear-content">
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
                                <Button width="100%" height="100%" BorderRadius="50px" text="Explore Services"/>
                        </section>
                    </section>
                    <button className="menu-btn" onClick={handleOpenMenu}>
                        {active && <FontAwesomeIcon icon={faAlignJustify}/>}
                        {!active && <FontAwesomeIcon icon={faTimes}/>}
                            
                    </button>
                </div>
            </div>

        </>
    )
}
export default Header;