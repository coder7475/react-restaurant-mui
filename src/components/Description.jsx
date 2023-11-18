import PropTypes from "prop-types";
// import second from './../../src/assets/home/chef-service.jpg'
import { Parallax } from "react-parallax";

function Description({ heading, subHeading, img }) {
  // console.log(img);
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={-200}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        height: "600px",
        // marginBottom: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="w-[800px] bg-[#15151599] text-white h-[300px] flex flex-col justify-center items-center gap-2 font-sans mx-auto">
        <h1 className="text-5xl font-semibold text-center">{heading}</h1>
        <p className="text-base font-normal px-10 text-center">{subHeading}</p>
      </div>
    </Parallax>
  );
}

Description.propTypes = {
  heading: PropTypes.string,
  img: PropTypes.any,
  subHeading: PropTypes.string,
};

export default Description;
