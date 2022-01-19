import React from "react";
import './Header.css' ;
import { Link } from "react-router-dom";

const Header= () =>{
    return(
        <div className="header">
            <div className="header--logo">
            </div>
            <nav className="navbar">
                <ul className="navbar--list">
                    <li> <Link to="/Hafez">فال حافظ</Link> </li>
                    <li> <a href="#">گنجینه اشعار </a> </li>
                    <li> <Link to="/About">درباره ما</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;