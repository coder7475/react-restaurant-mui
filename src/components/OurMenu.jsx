import OrderTime from "./OrderTime";
import useAxios from "../hooks/useAxios";
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const OurMenu = () => {
  const axios = useAxios();
  // const [dishes, setDishes] = useState([]);
  const { isLoading, data: popularDishes } = useQuery({
    queryKey: ["popular"],
    queryFn: async() => {
      const res = await axios.get("/popular")
      return res.data;
    },
  });

  if(isLoading) {
    return <span className="text-5xl text-center">Loading.....</span>
  }

  // console.log(popularDishes);
  
  return (
    <div>
      <OrderTime subHeading="Check it out" heading="FROM OUR MENU" />
      {
        popularDishes.length
      }
    </div>
  );
};

export default OurMenu;
