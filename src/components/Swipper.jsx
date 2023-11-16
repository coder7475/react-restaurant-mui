import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "./../assets/home/slide1.jpg";
import slider2 from "./../assets/home/slide2.jpg";
import slider3 from "./../assets/home/slide3.jpg";
import slider4 from "./../assets/home/slide4.jpg";
import slider5 from "./../assets/home/slide5.jpg";

const Swipper = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="max-w-4xl mx-auto  mb-24 mt-11"
      >
        <SwiperSlide>
          <img src={slider1} alt="salad" className="w-[320px]" />
          <h3 className="font-medium text-center text-[32px] text-white -mt-12">
            SALAD
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="pizza" className="w-[320px]" />
          <h3 className="font-medium text-center text-[32px] text-white -mt-12">
          PIZZA
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="soup" className="w-[320px]" />
          <h3 className="font-medium text-center text-[32px] text-white -mt-12">
            SOUP
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="dessert" className="w-[320px]" />
          <h3 className="font-medium text-center text-[32px] text-white -mt-12">
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="salad" className="w-[320px]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
