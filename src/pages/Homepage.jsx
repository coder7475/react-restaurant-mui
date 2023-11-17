import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Swipper from "../components/Swipper";
import OrderTime from "../components/OrderTime";
import Description from "../components/Description";
import OurMenu from '../components/OurMenu';
import CallUs from '../components/CallUs';
import ChefRecom from '../components/ChefRecom';
import CardImageOverlay from '../components/CardImageOverlay';
import Reviews from '../components/Reviews';
import { Helmet } from 'react-helmet-async';

import coverImg from './../assets/home/chef-service.jpg'

const Homepage = () => {
  return (
    <main>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <OrderTime
        heading="ORDER ONLINE"
        subHeading="---From 11:00am to 10:00pm---"
      />
      <Swipper />
      <div className="max-w-4xl mx-auto">
        <Description
          img={coverImg}
          heading="Bistro Boss"
          subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        />
      </div>
      <OurMenu/>
      <CallUs/>
      <ChefRecom/>
      <CardImageOverlay />
      <Reviews/>
      <Footer />
    </main>
  );
};

export default Homepage;
