import React from "react";
import './Hafez.css';
import Poem from "./Poem";
import { useEffect,useState } from "react";

const FEATURED_API="https://ganjgah.ir/api/ganjoor/hafez/faal";
const Hafez=()=>{
    const [poems, setPoem]= useState([]);
    useEffect(()=>{
        fetch(FEATURED_API)
        .then((res)=>res.json())
        .then((data)=>{
            setPoem(data);
        })
    });
    console.log(poems);
    return(
        <div className="Hafez">
            <Poem/>
            
        </div>
    )
}
export default Hafez;
