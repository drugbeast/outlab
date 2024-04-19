import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "./Slider.css";
import PropTypes from "prop-types";
import SliderPotCard from "../SliderPotCard"
import SliderVideoCard from "../SliderVideoCard"

Slider.propTypes = {
  slidesContent: PropTypes.array,
  contentType: PropTypes.string,
};

function Slider(props) {
  const { slidesContent, contentType } = props;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar]}
    >
      {slidesContent.map((slide) => {
        <SwiperSlide>
          {contentType == "pots" ? (
            <SliderPotCard content={slide} />
          ) : contentType == "videos" ? (
            <SliderVideoCard content={slide} />
          ) : (
            {}
          )}
        </SwiperSlide>;
      })}
    </Swiper>
  );
}

export default Slider;
