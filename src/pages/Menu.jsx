import { Helmet } from "react-helmet-async";
import Description from "../components/Description";
import img from "./../assets/menu/banner3.jpg";
import OrderTime from "../components/OrderTime";
import OurMenu from "../components/OurMenu";
import coverImg from "./../assets/home/chef-service.jpg";
import Footer from '../components/Footer';
import useMenuData from '../hooks/useMenuData';

const Menu = () => {
  const {
    getSalads,
    getDesserts,
    getSoups,
    getOfferedDishes,
    getPizzas
  } = useMenuData();
  // const [dishes, setDishes] = useState([]);
  // fetch offered dishes
  const { isLoading: OffLoading, data: offeredDishes } = getOfferedDishes;
  // fetch the desserts
  const { isLoading: dessertLoading, data: dessertDishes } = getDesserts;
  // fetch the pizzas
  const { isLoading: pizzaLoading, data: pizzas } = getPizzas;
  // fetch the salads
  const { isLoading: saladLoading, data: salads } = getSalads;
  // fetch the soups
  const { isLoading: soupLoading, data: soups } = getSoups;
  // Loading
  if (OffLoading || dessertLoading || pizzaLoading || saladLoading || soupLoading) {
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
      <Description
        img={coverImg}
        heading="Salads"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <OurMenu
        popularDishes={salads}
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
      
      <Description
        img={coverImg}
        heading="Soups"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <OurMenu
        popularDishes={soups}
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
      <Footer/>
    </main>
  );
};

export default Menu;
