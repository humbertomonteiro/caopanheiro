import styles from "./slidesDrag.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

export default function SlidesDrag({ array }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      modules={[Pagination]}
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
