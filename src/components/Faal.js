import { Link } from "react-router-dom";
import './Faal.css';
import {useState, useEffect } from "react";

const FEATURED_API="https://ganjgah.ir/api/ganjoor/hafez/faal";
const Faal=()=>{
    const audio=document.getElementById("poemAduio");
    const [poem,setPoem]=useState([]);
        useEffect(()=>{
            fetch(FEATURED_API)
            .then((res)=>res.json())
            .then((data)=>{
                setPoem(data);
                console.log(data.recitations["0"]['mp3Url']);
                let audioUrl=data.recitations["0"]["mp3Url"];
                audio.innerHTML=`<source src="${audioUrl}" type="audio/mpeg"></source>`;
                
            });
    },[]);
    
    return(
        <div className="poem">
            <div className="container">
                <div className="poem--container">
                    <h1 className="poem--name">{poem.title}</h1>
                    <div className="poem--text">{poem.plainText}</div>
                    <div className="poem--audio" >
                        <audio controls id="poemAduio"></audio>
                    </div>
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





    //         async function getFaalData(url){
    //     const response= await fetch(url);
    //     let data= await response.json();
    //     let title=data.title;
    //     let recitations= data.recitations;
    //     let htmlText=data.htmlText;
    //     let audio = readRecitations(recitations[0]);
    //     console.log(audio); 
    // }
    // function readRecitations(item){
    //     const mp3Url=item.mp3;
    //     const recitations=document.getElementById("recitations");
    //     const p=document.createElement("p");
    //     p.setAttribute("id","recitationsItem");
    //     recitations.append(p);


    //     const audio=document.createElement("audio");
    //     audio.setAttribute("controls","controls");
    //     audio.setAttribute("class","audio");
    //     audio.innerHTML=`<source src=${mp3Url}>`
    //     recitations.append(audio);
    //     console.log(mp3Url);
    // }

    // getFaalData(FEATURED_API);

