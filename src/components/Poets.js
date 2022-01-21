import './Poets.css';
import PoetSwiper from './PoetSwiper';
const Poets=()=>{
    return(
       <div className="poets">
           <div className='poets--yellow-box'>
               <div className='poets-shape'></div>
           </div>
           <div className='poets--blue-box'>
               <PoetSwiper></PoetSwiper>
           </div>
       </div> 
    )
}

export default Poets;