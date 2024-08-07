import styles from "./slidesDrag.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

export default function SlidesDrag({ array }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {array.map((item, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
