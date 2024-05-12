import { PropTypes } from "prop-types";

const Heading = ({ children, className }) => {
  Heading.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  return (
    <div
      className={`w-fit px-5 sm:px-0 sm:w-[85%] md:w-[70%] lg:w-[40%] sm:mt-0 mt-5 mx-auto flex justify-center items-center border border-n-5/50 rounded-2xl ${
        className || ""
      }`}
    >
      <h1 className="h1 pt-1 lg:pt-2 xl:pt-3 text-n-2 text-center">
        {children}
      </h1>
    </div>
  );
};

export default Heading;
