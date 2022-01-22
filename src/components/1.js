import { Link } from "react-router-dom";
import './Faal.css';
import { useEffect } from "react";
import { useState } from "react";
// import HtmlToReactParser from "html-react-parser";

const FEATURED_API="https://ganjgah.ir/api/ganjoor/hafez/faal";
const SOUND_API="https://ganjgah.ir/api/audio/file/";
const Faal=()=>{
    const [faal, setFaal]=useState([]);   
     useEffect(()=>{
         fetch(FEATURED_API)
    .then((res)=>res.json())
    .then((data)=>{ 
         setFaal(data);
    })
   },[]);
   
   console.log(faal);
      
   console.log(faal.recitations["0"]);

//    const parse=require('html-react-parser');

    return(
        <div className="poem">
            <div className="container">
                <div className="poem--container">
                    <h1 className="poem--name">{`${faal.title}:`}</h1>
                    <div className="poem--text">{faal.plainText}</div>
                    <audio controls>
                        <source src={"#"}></source>
                    </audio>
                </div>
                <div className="description--container">
                    <h2>:ای صاحب فال</h2>
                    <p>خود را مأیوس و افسرده می بینی و از 
                        بدخواهی دشمن شکوه و شکایت داری.
                         خود را نباز و دل به تقدیر بسپار.
                         هر چه خیر است پیش می آید. 
                         به خدا توکل کن و با دوستان
                         دانا مشورت کن
                          تا راه چاره ای پیدا شود.</p>
                </div>
                <a className="back-btn"><Link to="/">باز گشت به صفحه اصلی</Link></a>
            </div>
        </div>
    )
}

export default Faal;