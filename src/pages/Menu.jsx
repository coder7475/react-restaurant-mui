import { Helmet } from "react-helmet-async";
import Description from "../components/Description";
import img from "./../assets/menu/banner3.jpg";
import OrderTime from "../components/OrderTime";
import OurMenu from "../components/OurMenu";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import coverImg from "./../assets/home/chef-service.jpg";

const Menu = () => {
  const axios = useAxios();
  // const [dishes, setDishes] = useState([]);
  // fetch offered dishes
  const { isLoading: OffLoading, data: offeredDishes } = useQuery({
    queryKey: ["offered"],
    queryFn: async () => {
      const res = await axios.get("/offered");
      return res.data;
    },
  });
  // fetch the desserts
  const { isLoading: dessertLoading, data: dessertDishes } = useQuery({
    queryKey: ["dessert"],
    queryFn: async () => {
      const res = await axios.get("/dessert");
      return res.data;
    },
  });
  // fetch the pizzas
  const { isLoading: pizzaLoading, data: pizzas } = useQuery({
    queryKey: ["pizza"],
    queryFn: async () => {
      const res = await axios.get("/pizza");
      return res.data;
    },
  });

  // Loading
  if (OffLoading || dessertLoading || pizzaLoading) {
    return <span className="text-5xl text-center">Loading.....</span>;
  }

  // console.log(pizzas);
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Bistro Boss | MENU</title>
      </Helmet>
      <Description
        img={img}
        subHeading="Would you like to try a dish?"
        heading="OUR MENU"
      />
      <div className="mt-20">
        <OrderTime heading="TODAYS OFFER" subHeading="Don't Miss" />
      </div>
      <OurMenu
        popularDishes={offeredDishes}
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
      <Description
        img={coverImg}
        heading="Desserts"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <OurMenu
        popularDishes={dessertDishes}
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
      <Description
        img={coverImg}
        heading="Pizza"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <OurMenu
        popularDishes={pizzas}
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
    </main>
  );
};

export default Menu;
