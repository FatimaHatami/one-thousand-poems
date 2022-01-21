import { useState,useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './PoetSwiper.css'
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from 'swiper';
const POETS_API="https://ganjgah.ir/api/ganjoor/poets";
const IMAGE_API="https://ganjgah.ir/api/ganjoor/poet/image";
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
                <SwiperSlide className='poets-swiper'>
                    <img src={IMAGE_API+poet.fullUrl+".gif"}></img>
                    <h1>{poet.name}</h1>
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