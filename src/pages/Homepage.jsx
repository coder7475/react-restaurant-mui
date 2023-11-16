import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Swipper from "../components/Swipper";
import OrderTime from "../components/OrderTime";
import Description from "../components/Description";
import OurMenu from '../components/OurMenu';
import CallUs from '../components/CallUs';
import ChefRecom from '../components/ChefRecom';
import CardImageOverlay from '../components/CardImageOverlay';

const Homepage = () => {
  return (
    <main>
      <Banner />
      <OrderTime
        heading="ORDER ONLINE"
        subHeading="---From 11:00am to 10:00pm---"
      />
      <Swipper />
      <div className="max-w-4xl mx-auto">
        <Description
          heading="Bistro Boss"
          subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        />
      </div>
      <OurMenu/>
      <CallUs/>
      <ChefRecom/>
      <CardImageOverlay/>
      <Footer />
    </main>
  );
};

export default Homepage;
