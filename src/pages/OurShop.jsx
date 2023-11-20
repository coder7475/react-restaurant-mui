import { Helmet } from "react-helmet-async";
import Description from "../components/Description";
import img from "./../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import useMenuData from "../hooks/useMenuData";
import ChefRecom from "../components/ChefRecom";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // console.log(tabIndex);

  const { getSalads, getDesserts, getSoups, getDrinks, getPizzas } =
    useMenuData();

  const { isLoading: drinksLoading, data: drinks } = getDrinks;
  // fetch the desserts
  const { isLoading: dessertLoading, data: desserts } = getDesserts;
  // fetch the pizzas
  const { isLoading: pizzaLoading, data: pizzas } = getPizzas;
  // fetch the salads
  const { isLoading: saladLoading, data: salads } = getSalads;
  // fetch the soups
  const { isLoading: soupLoading, data: soups } = getSoups;
  // Loading
  if (
    drinksLoading ||
    dessertLoading ||
    pizzaLoading ||
    saladLoading ||
    soupLoading
  ) {
    return <span className="text-5xl text-center">Loading.....</span>;
  }

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
      <Tabs
        className="mt-16 mx-auto max-w-4xl text-lg"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex gap-3 mx-auto max-w-fit">
          <Tab
            className={
              tabIndex == 0 && "underline text-[#BB8506] text-lg font-semibold "
            }
          >
            SALAD
          </Tab>
          <Tab
            className={
              tabIndex == 1 && "underline text-[#BB8506] text-lg font-semibold"
            }
          >
            PIZZA
          </Tab>
          <Tab
            className={
              tabIndex == 2 && "underline text-[#BB8506] text-lg font-semibold"
            }
          >
            SOUPS
          </Tab>
          <Tab
            className={
              tabIndex == 3 && "underline text-[#BB8506] text-lg font-semibold"
            }
          >
            DESSERTS
          </Tab>
          <Tab
            className={
              tabIndex == 4 && "underline text-[#BB8506] text-lg font-semibold"
            }
          >
            DRINKS
          </Tab>
        </TabList>

        <TabPanel>
          <ChefRecom dishes={salads} />
        </TabPanel>
        <TabPanel>
          <ChefRecom dishes={pizzas} />
        </TabPanel>
        <TabPanel>
          <ChefRecom dishes={soups} />
        </TabPanel>
        <TabPanel>
          <ChefRecom dishes={desserts} />
        </TabPanel>
        <TabPanel>
          <ChefRecom dishes={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
