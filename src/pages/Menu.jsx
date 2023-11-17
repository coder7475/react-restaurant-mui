import { Helmet } from 'react-helmet-async';
import Description from '../components/Description';
import img from './../assets/menu/banner3.jpg';

const Menu = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Bistro Boss | MENU</title>
      </Helmet>
      <Description img={img} subHeading="Would you like to try a dish?" heading="OUR MENU" />
    </main>
  );
};

export default Menu;