import React from 'react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import {ProductoComponent} from './ProductoComponent'
// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SliderComponent=({data})=>{
    

    return(
        <>
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            data.map((product,i)=>{

                return(
<SwiperSlide key={i} ><ProductoComponent product={product} /></SwiperSlide>
                )
            })
        }

    </Swiper>

        
        </>
    )
}
export default SliderComponent