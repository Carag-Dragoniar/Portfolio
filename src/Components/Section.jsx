import PropTypes from "prop-types";

import cross from "../assets/cross.svg";

const Section = ({ className, classNameBorder, children, first, crosses, id }) => {
  Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    first: PropTypes.bool,
    classNameBorder: PropTypes.string,
    crosses: PropTypes.bool,
    id: PropTypes.string,
  };
  return (
    <div className={`w-full h-auto ${classNameBorder || ""}`}>
      {crosses && (
        <div className="hidden md:flex justify-between items-center w-[90.5vw] xl:w-[86.5vw] 2xl:w-[82.5vw] mx-auto pb-[2vw]">
          <img className="mr-[2.5vw]" src={cross} alt="Code icon" width={50} />
          <hr className=" w-full border-gray-500/50" />
          <img className="ml-[2.5vw]" src={cross} alt="Code icon" width={50} />
        </div>
      )}
      <hr
        className={`md:hidden ${
          first && "hidden"
        } mt-1 w-full border-gray-500/50`}
      />
      <section
        id={`${id || ""}`}
        className={`w-[88vw] xl:w-[84vw] 2xl:w-[80vw] h-auto border-gray-500/50 md:border-x-2 mx-auto p-[2vw] ${
          className || ""
        }`}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
