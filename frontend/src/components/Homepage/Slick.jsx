import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slick.css";
import { Pagination, Autoplay } from "swiper";
import Bannerimg1 from '../../Images/BannerImage/BannerImg1.png';
import Bannerimg2 from '../../Images/BannerImage/BannerImg2.png';
import Bannerimg3 from '../../Images/BannerImage/BannerImg3.png';
import Bannerimg4 from '../../Images/BannerImage/BannerImg4.png';


const Slick = () => {
  return (
    <div className="">
      <Swiper
        // slidesPerView={1}
        centeredSlides={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        // loop={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Bannerimg1} /></SwiperSlide>
        <SwiperSlide><img src={Bannerimg2}/></SwiperSlide>
        <SwiperSlide><img  src={Bannerimg3}/></SwiperSlide>
        <SwiperSlide><img  src={Bannerimg4}/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slick
