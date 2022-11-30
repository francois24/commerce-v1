import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slick.css";
import { Pagination, Autoplay } from "swiper";

const Slick = () => {
  return (
    <div className="mt-5">
      <Swiper
        // slidesPerView={1}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        // loop={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slick
