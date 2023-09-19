import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper/modules';
import {  gallrely } from "../contexts/dataGallrely";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./style.css";


const Carousel = () => {
  const datagallrely = (gallrely)
  return (
    <div className="container m-auto hidden lg:block my-10">
      <div className="flex justify-center items-center ">
        <h1 className='text-lg w-fit mx-auto  text-secondary bg-white px-4 my-4 rounded-lg  shadow-3xl'>THƯ VIỆN ẢNH</h1>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper max-h-[350px]"
      >
        {datagallrely.map( (photo) => {
          return(
            <SwiperSlide className=" cursor-pointer w-[280px] h-[350px] object-fill">
              <img src={photo} />
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </div>
  );
}

export default Carousel