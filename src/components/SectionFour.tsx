import {
  sectionFourEllipse1,
  gardenCart,
  sectionFourImg,
  sectionFourEllipse2,
} from "../assets";

const SectionFour = () => {
  return (
    <div className=" container mx-auto md:mt-[103px] mt-[80px] md:mb-[193px] mb-[100px] md:flex md:justify-between">
      <div className=" relative">
        <h2 className="heading2 mb-5 hidden md:block">
          Product, defined by <br /> it’s customer
        </h2>
        <h2 className="heading2 mb-5 text-center  md:hidden">
          Product, defined by it’s customer
        </h2>
        <p className="paragraph hidden md:block">
          wanted is a web3 social app created for discovery. you <br /> tell us
          what you’re interested in, and we help you find <br /> others to share
          your interests.
        </p>
        <p className="paragraph md:hidden text-center mb-5">
          wanted is a web3 social app created for discovery. you <br /> tell us
          what you’re interested in, and we help you find <br /> others to share
          your interests.
        </p>
        <div className="buy-unix-token-btn md:flex float-start gap-2.5 items-center mt-[56px] hidden">
          <img src={gardenCart} alt="garden-cart" />
          <span className="buy-btn-gradiant paragraph">Buy unix token</span>
        </div>
        <div className=" absolute top-[100px] -left-[320px] hidden md:block">
          <img src={sectionFourEllipse2} alt="section-three" />
        </div>
      </div>
      <div className=" relative">
        <div className=" absolute -right-[250px] -top-[70px] -z-10 hidden md:block">
          <img src={sectionFourEllipse1} alt="section-three" />
        </div>
        <div>
          <img src={sectionFourImg} alt="img" />
        </div>

        <div className="buy-unix-token-btn flex justify-center gap-2.5 items-center mt-[56px] md:hidden">
          <img src={gardenCart} alt="garden-cart" />
          <span className="buy-btn-gradiant paragraph">Buy unix token</span>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
