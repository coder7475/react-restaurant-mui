import PropTypes from "prop-types";
// import second from './../../src/assets/home/chef-service.jpg'

function Description({ heading, subHeading, img }) {
  // console.log(img);
  return (
    <div className=" h-[800px] mb-20 flex items-center justify-center"  style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat"
    }}>
      <div className="w-2/3 bg-[#15151599] text-white h-[300px] flex flex-col justify-center items-center gap-2 font-sans" >
        <h1 className="text-5xl font-semibold text-center">{heading}</h1>
        <p className="text-base font-normal px-10 text-center">{subHeading}</p>
      </div>
    </div>
  );
}

Description.propTypes = {
  heading: PropTypes.string,
  img: PropTypes.any,
  subHeading: PropTypes.string
}

export default Description;
