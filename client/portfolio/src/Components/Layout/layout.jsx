import React from "react";
import './layout.scss'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import {Outlet} from 'react-router-dom'
const Layout=()=>{
    return(
        <>
            <div className="main-layout">
                <Header/>
                <Outlet />
                {/* <Footer/> */}
            </div>
        </>
    );
}
export default Layout
