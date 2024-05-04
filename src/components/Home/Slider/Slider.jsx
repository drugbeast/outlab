import "swiper/css";
import "swiper/css/scrollbar";
import "./Slider.css";
import "swiper/css/autoplay";

import PropTypes from "prop-types";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderPotCard from "../SliderPotCard";
import SliderVideoCard from "../SliderVideoCard";

Slider.propTypes = {
  slidesContent: PropTypes.array,
  slidesPerView: PropTypes.number,
  contentType: PropTypes.string,
};

function Slider(props) {
  const { slidesContent, slidesPerView, contentType } = props;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={slidesPerView}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar, Autoplay]}
      autoplay={contentType == "videos"}
    >
      {slidesContent.map((slide) => (
        <SwiperSlide key={slide.id}>
          {contentType == "pots" ? (
            <SliderPotCard content={slide} />
          ) : contentType == "videos" ? (
            <SliderVideoCard content={slide} />
          ) : (
            {}
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
