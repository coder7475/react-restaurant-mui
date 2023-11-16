

import PropTypes from "prop-types"
const OrderTime = ({heading, subHeading}) => {
  return (
    <div className="text-center">
      <h1 className="text-[#D99904] text-xl italic font-normal">
        ---{subHeading}---
      </h1>
      <hr className="max-w-[424px] h-1 mx-auto mt-4" />
      <h3 className="text-[40px] font-normal py-2">{heading}</h3>
      <hr className="max-w-[424px] h-1 mx-auto mb-12" />
    </div>
  );
};

OrderTime.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
}

export default OrderTime;
