import './Poets.css';
import PoetSwiper from './PoetSwiper';
import {useState,useEffect} from "react"


const POEM_API="https://ganjgah.ir/api/ganjoor/poem/random";
const Poets=()=>{
    const [poem,setPoem]=useState([]);
        useEffect(()=>{
            fetch(POEM_API)
            .then((res)=>res.json())
            .then((data)=>{
                setPoem(data);
                console.log(data);
                
            });
    },[]);
    return(
       <div className="poets">
           <div className='poets--yellow-box'>
               <div className='poets-shape'>
                   {/* <Poem></Poem> */}
               </div>
           </div>
           <div className='poets--blue-box'>
               <PoetSwiper></PoetSwiper>
           </div>
       </div> 
    )
}

export default Poets;