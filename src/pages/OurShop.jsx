
import { Helmet } from 'react-helmet-async';
import Description from '../components/Description';
import img from "./../assets/shop/banner2.jpg";


const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | SHOP</title>
      </Helmet>
      <Description
        img={img}
        subHeading="Would you like to try a dish?"
        heading="OUR SHOP"
      />
    </div>
  );
};

export default OurShop;