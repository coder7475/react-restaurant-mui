import PropTypes from "prop-types"
import OrderTime from "./OrderTime";
import useAxios from "../hooks/useAxios";
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function PopularDish(props) {
  return (
    <div className="flex gap-4">
      <img
        src={props.dish.image}
        alt="popular dish"
        className="rounded-r-[200px]  rounded-b-[200px] w-[118px] rounded-br-[200px] h-[104px]"
      />
      <div className="font-normal flex flex-col gap-2">
        <h2 className="uppercase font-serif text-xl text-[#151515]">
          {props.dish.name}---------
        </h2>
        <p className="text-base font-mono text-[#737373]">
          {props.dish.recipe}
        </p>
      </div>
      <div className="text-[#BB8506] text-xl font-normal">
        ${props.dish.price}
      </div>
    </div>
  );
}

PopularDish.propTypes = {
  dish: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}

const OurMenu = () => {
  const axios = useAxios();
  // const [dishes, setDishes] = useState([]);
  const { isLoading, data: popularDishes } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axios.get("/popular");
      return res.data;
    },
  });

  if (isLoading) {
    return <span className="text-5xl text-center">Loading.....</span>;
  }

  // console.log(popularDishes);

  return (
    <div className="my-24">
      <OrderTime subHeading="Check it out" heading="FROM OUR MENU" />
      <div className="grid grid-col-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {popularDishes.map((dish) => (
          <PopularDish key={dish._id} dish={dish}></PopularDish>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
