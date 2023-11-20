import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';


const useMenuData = () => {
  const axios = useAxios();
  // const [dishes, setDishes] = useState([]);
  // fetch offered dishes
  const getOfferedDishes = useQuery({
    queryKey: ["offered"],
    queryFn: async () => {
      const res = await axios.get("/offered");
      return res.data;
    },
  });
  // fetch the desserts
  const getDesserts = useQuery({
    queryKey: ["dessert"],
    queryFn: async () => {
      const res = await axios.get("/dessert");
      return res.data;
    },
  });
  // fetch the pizzas
  const getPizzas = useQuery({
    queryKey: ["pizza"],
    queryFn: async () => {
      const res = await axios.get("/pizza");
      return res.data;
    },
  });
  // fetch the salads
  const getSalads = useQuery({
    queryKey: ["salad"],
    queryFn: async () => {
      const res = await axios.get("/salad");
      return res.data;
    },
  });
  // fetch the soups
  const getSoups = useQuery({
    queryKey: ["soup"],
    queryFn: async () => {
      const res = await axios.get("/soup");
      return res.data;
    },
  });

  const getDrinks = useQuery({
    queryKey: ["drinks"],
    queryFn: async () => {
      const res = await axios.get("/drinks");
      return res.data;
    }
  })
  
  
  return {
    getSalads,
    getDesserts,
    getSoups,
    getOfferedDishes,
    getPizzas,
    getDrinks
  };
};

export default useMenuData;