import PropTypes from "prop-types"
import OrderTime from "./OrderTime";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

function Details(props) {
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <Rating
        style={{
          maxWidth: 250,
        }}
        value={props.review.rating}
        readOnly
      />
      <p className="w-2/3 mx-auto text-center font-mono text-xl font-normal">
        <div className="flex justify-center text-5xl mb-10">
          <FaQuoteLeft />
        </div>
        <p>{props.review.details}</p>

        <h3 className="text-[#CD9003] text-3xl font-medium font-sans">
          {props.review.name}
        </h3>
      </p>
    </div>
  );
}

Details.propTypes = {
  review: PropTypes.shape({
    details: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.any
  })
}

const Reviews = () => {
  const axios = useAxios();

  const { isLoading, data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("/reviews");
      return res.data;
    },
  });

  if (isLoading) {
    return <span className="text-5xl text-center">Loading.....</span>;
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto">
      <OrderTime subHeading="What Our Clients Say" heading="TESTIMONIALS" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <Details review={review}></Details>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
