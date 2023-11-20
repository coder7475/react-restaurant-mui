import PropTypes from "prop-types"


function PopularDish(props) {
  return (
    <div className="flex gap-4">
      <img
        src={props.dish.image}
        alt="popular dish"
        className="rounded-r-[200px]  rounded-b-[200px] w-[118px] rounded-br-[200px] h-[104px]"
      />
      <div className="font-normal flex flex-col gap-2">
        <h2 className="uppercase font-serif text-xl text-[#151515]">
          {props.dish.name}---------
        </h2>
        <p className="text-base font-mono text-[#737373]">
          {props.dish.recipe}
        </p>
      </div>
      <div className="text-[#BB8506] text-xl font-normal">
        ${props.dish.price}
      </div>
    </div>
  );
}

PopularDish.propTypes = {
  dish: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}

const OurMenu = ({ popularDishes, btnText }) => {
  // console.log(popularDishes);

  return (
    <div className="my-24">
      <div className="grid grid-col-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {popularDishes.map((dish) => (
          <PopularDish key={dish._id} dish={dish}></PopularDish>
        ))}
      </div>
      <div className="flex justify-center items-center mt-24">

      <button className="w-fit py-2 border-b-[3px] border-y-[#1F2937] rounded-lg">{btnText}</button>
      </div>
    </div>
  );
};

OurMenu.propTypes = {
  btnText: PropTypes.any,
  popularDishes: PropTypes.any
}

export default OurMenu;
