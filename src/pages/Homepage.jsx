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
import useAxios from "../hooks/useAxios";
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import coverImg from './../assets/home/chef-service.jpg'
import Navbar from '../components/Navbar';

const Homepage = () => {
  const axios = useAxios();
  // const [dishes, setDishes] = useState([]);
  const { isLoading:popularLoading, data: popularDishes } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axios.get("/popular");
      return res.data;
    },
  });
  // const [dishes, setDishes] = useState([]);
  const { isLoading:saladsLoading, data: salads } = useQuery({
    queryKey: ["salads"],
    queryFn: async () => {
      const res = await axios.get("/salad");
      return res.data;
    },
  });

  if (popularLoading || saladsLoading) {
    return <span className="text-5xl text-center">Loading.....</span>;
  }
  
  return (
    <main>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      {/* Main Layout */}
      <header className="fixed z-10 w-full">
        <Navbar />
      </header>
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
      <OrderTime subHeading="Check it out" heading="FROM OUR MENU" />
      <OurMenu popularDishes={popularDishes} btnText="View Full Menu"/>
      <CallUs/>
      <OrderTime heading="CHEF RECOMMENDS" subHeading="Should Try" />
      <ChefRecom dishes={salads}/>
      <CardImageOverlay />
      <Reviews/>
      <Footer />
    </main>
  );
};

export default Homepage;
