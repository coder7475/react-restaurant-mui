import { Helmet } from "react-helmet-async";
import Description from "../components/Description";
import img from "./../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from 'react';

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex);
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
      <Tabs className="mt-16 mx-auto max-w-4xl text-lg" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
        <TabList className="flex gap-3 mx-auto max-w-fit">
          <Tab className={tabIndex==0 && "underline text-[#BB8506] text-lg font-semibold "}>SALAD</Tab>
          <Tab className={tabIndex==1 && "underline text-[#BB8506] text-lg font-semibold"}>PIZZA</Tab>
          <Tab className={tabIndex==2 && "underline text-[#BB8506] text-lg font-semibold"}>SOUPS</Tab>
          <Tab className={tabIndex==3 && "underline text-[#BB8506] text-lg font-semibold"}>DESSERTS</Tab>
          <Tab className={tabIndex==4 && "underline text-[#BB8506] text-lg font-semibold"}>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
