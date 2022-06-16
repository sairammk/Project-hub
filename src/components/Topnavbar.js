import React, { useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import "./CSS/Topnavbar.css";

const Topnavbar = () => {

const [showMediaIcons, setShowMediaIcons] = useState(false);    

return (
    <>
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>W</span>elcome, 
                    <span> N</span>ame
                </h2>
            </div>
            {/* 2nd menu part */}
            <div className = {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">New Project</a>
                    </li>
                    <li>
                        <a href="#">Our Clients</a>
                    </li>
                </ul>
            </div>
            {/* search bar starts */}
            <div className="search">
                <div className="searchInputs"></div>
            </div>   
            <div className="social-media">
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Topnavbar