import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";

function Recommanded(props) {
  const { name, image, price, _id } = props.salad;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  const addToCart = () => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      // console.log(cartItem);
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            onClick={addToCart}
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
    _id: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}


const ChefRecom = ({ dishes }) => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-4">
        {dishes.slice(0, 3).map((salad) => (
          <Recommanded
            key={salad._id}
            salad={salad}
          
          ></Recommanded>
        ))}
      </div>
    </div>
  );
};

ChefRecom.propTypes = {
  dishes: PropTypes.any,
};

export default ChefRecom;
