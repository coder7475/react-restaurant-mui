import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async";
import Description from "../components/Description";
import img from "./../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import useMenuData from "../hooks/useMenuData";
import ChefRecom from "../components/ChefRecom";

function DishesTabs(props) {
  return (
    <Tabs
      className="mt-16 mx-auto max-w-4xl text-lg"
      defaultIndex={props.tabIndex}
      onSelect={(index) => props.setTabIndex(index)}
    >
      <TabList className="flex gap-3 mx-auto max-w-fit">
        <Tab
          className={
            props.tabIndex == 0 &&
            "underline text-[#BB8506] text-lg font-semibold "
          }
        >
          SALAD
        </Tab>
        <Tab
          className={
            props.tabIndex == 1 &&
            "underline text-[#BB8506] text-lg font-semibold"
          }
        >
          PIZZA
        </Tab>
        <Tab
          className={
            props.tabIndex == 2 &&
            "underline text-[#BB8506] text-lg font-semibold"
          }
        >
          SOUPS
        </Tab>
        <Tab
          className={
            props.tabIndex == 3 &&
            "underline text-[#BB8506] text-lg font-semibold"
          }
        >
          DESSERTS
        </Tab>
        <Tab
          className={
            props.tabIndex == 4 &&
            "underline text-[#BB8506] text-lg font-semibold"
          }
        >
          DRINKS
        </Tab>
      </TabList>

      <TabPanel>
        <ChefRecom dishes={props.salads} />
      </TabPanel>
      <TabPanel>
        <ChefRecom dishes={props.pizzas} />
      </TabPanel>
      <TabPanel>
        <ChefRecom dishes={props.soups} />
      </TabPanel>
      <TabPanel>
        <ChefRecom dishes={props.desserts} />
      </TabPanel>
      <TabPanel>
        <ChefRecom dishes={props.drinks} />
      </TabPanel>
    </Tabs>
  );
}

DishesTabs.propTypes = {
  desserts: PropTypes.any,
  drinks: PropTypes.any,
  pizzas: PropTypes.any,
  salads: PropTypes.any,
  setTabIndex: PropTypes.func,
  soups: PropTypes.any,
  tabIndex: PropTypes.number
}

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
      <DishesTabs
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        drinks={drinks}
        desserts={desserts}
        pizzas={pizzas}
        salads={salads}
        soups={soups}
      ></DishesTabs>
    </div>
  );
};

export default OurShop;
