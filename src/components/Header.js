import React from "react";
import './Header.css' ;
const Header= (props) =>{
    return(
        <div className="header">
            <div className="header--logo">
                {/* <img alt="Ganjour" src={props.logo}> </img> */}
            </div>
            <nav className="navbar">
                <ul className="navbar--list">
                    <li> <a href="#">فال حافظ</a> </li>
                    <li> <a href="#">گنجینه اشعار </a> </li>
                    <li> <a href="#">درباره ما </a> </li>
                </ul>
            </nav>
           
        </div>
    )
}

export default Header;