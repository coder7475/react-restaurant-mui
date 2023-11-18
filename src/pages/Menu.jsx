import { Helmet } from 'react-helmet-async';
import Description from '../components/Description';
import img from './../assets/menu/banner3.jpg';
import OrderTime from '../components/OrderTime';
import OurMenu from '../components/OurMenu';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const Menu = () => {
  const axios = useAxios();
  // const [dishes, setDishes] = useState([]);
  const { isLoading:OffLoading, data: offeredDishes } = useQuery({
    queryKey: ["offered"],
    queryFn: async () => {
      const res = await axios.get("/offered");
      return res.data;
    },
  });


  if (OffLoading) {
    return <span className="text-5xl text-center">Loading.....</span>;
  }
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Bistro Boss | MENU</title>
      </Helmet>
      <Description img={img} subHeading="Would you like to try a dish?" heading="OUR MENU" />
      <div className="mt-20">
        <OrderTime heading="TODAYS OFFER" subHeading="Don't Miss"/>
      </div>
      <OurMenu popularDishes={offeredDishes} btnText="ORDER YOUR FAVOURITE FOOD"/>
      
    </main>
  );
};

export default Menu;