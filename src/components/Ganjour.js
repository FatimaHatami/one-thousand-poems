import React from "react";
import Header from "./Header";
import './Ganjour.css';
import Description from "./Description";
const Ganjour= (props)=>{
    return(
        <div className="Ganjour">
            <Header />
            <div className="main">
                <div className="bc-image">
                </div>
                <Description image={props.image}/>
            </div>
           
        </div>
    )
}

export default Ganjour;