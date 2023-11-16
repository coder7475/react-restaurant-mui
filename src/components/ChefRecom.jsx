import PropTypes from "prop-types"
import OrderTime from "./OrderTime";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Recommanded(props) {
  return (
    <div className="mb-28">
      <Card
        sx={{
          backgroundColor: "#F3F3F3",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300px"
            image={props.salad.image}
            alt="salad image"
          />
          <CardContent
            sx={{
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="subtitle1" component="div">
              {props.salad.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.salad.recipe}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            size="large"
            sx={{
              color: "#BB8506",
              fontFamily: "Inter",
              fontSize: "20px",
              borderRadius: "8px",
              borderBottom: "3px solid #BB8506",
              background: "#E8E8E8",
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Recommanded.propTypes = {
  salad: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.any,
    recipe: PropTypes.any
  })
}

const ChefRecom = () => {
  const axios = useAxios();
  // const [dishes, setDishes] = useState([]);
  const { isLoading, data: salads } = useQuery({
    queryKey: ["salads"],
    queryFn: async () => {
      const res = await axios.get("/salad");
      return res.data;
    },
  });

  if (isLoading) {
    return <span className="text-5xl text-center">Loading.....</span>;
  }

  return (
    <div>
      <OrderTime heading="CHEF RECOMMENDS" subHeading="Should Try" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-4">
        {salads.slice(0, 3).map((salad) => (
          <Recommanded key={salad._id} salad={salad}></Recommanded>
        ))}
      </div>
    </div>
  );
};

export default ChefRecom;
