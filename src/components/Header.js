import React from "react";
import './Header.css' ;
const Header= () =>{
    return(
        <div className="header">
            <div className="header--logo">
                {/* <img alt="Ganjour" src={require("../img/logo.jpg").default}> </img> */}
                <h1>Logo</h1>
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