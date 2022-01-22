import { useState,useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './PoetSwiper.css'
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from 'swiper';
const RAND_POEMS_API=`https://ganjgah.ir/api/ganjoor/poem/random?poetId=`
const IMAGE_API="https://ganjgah.ir/api/ganjoor/poet/image";
const POETS_API="https://ganjgah.ir/api/ganjoor/poets";
SwiperCore.use(Navigation);
const PoetSwiper=()=>{
    const [Poets,setPoets]=useState([]);
    useEffect(()=>{
        fetch(POETS_API)
        .then((res)=>res.json())
        .then((data)=>{
            setPoets(data);
            // console.log(...data);
        });
    });
    // Poets.map((poet)=>(
    //     console.log(poet)
    // ))
    const ClickHandler=()=>{
        fetch(RAND_POEMS_API)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            
        })
    }
    return(
        <Swiper
            navigation={true}
            spaceBetween={70}
            slidesPerView={5}
            centeredSlides={true}
            onSlideChange={()=>console.log('Slide Change')}
            onSwiper={(swiper)=>console.log(swiper)}
        >
            
            {Poets.map((poet)=>(
                    <SwiperSlide className='poets-swiper' >
                       <a  onClick={ClickHandler}>
                       <img src={`${IMAGE_API+poet.fullUrl}.gif`}></img>
                        <h1>{poet.name}</h1>
                       </a>
                    </SwiperSlide>
                    
            ))}
            {/* <SwiperSlide className='poets-swiper'> 
                <img src=""></img>
                <h2>نام شاعر</h2>
                
            </SwiperSlide>
            <SwiperSlide className='poets-swiper'> Slide 2</SwiperSlide>
            <SwiperSlide className='poets-swiper'> Slide 3</SwiperSlide>
            <SwiperSlide className='poets-swiper'> Slide 4</SwiperSlide>
            <SwiperSlide className='poets-swiper'> Slide 5</SwiperSlide> */}
        </Swiper>
    );
};

export default PoetSwiper;