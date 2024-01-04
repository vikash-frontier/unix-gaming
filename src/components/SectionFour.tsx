import {
  sectionFourEllipse1,
  gardenCart,
  sectionFourImg,
  sectionFourEllipse2,
} from "../assets";

const SectionFour = () => {
  return (
    <div className=" container mx-auto mt-[103px] mb-[193px] flex justify-between">
      <div className=" relative">
        <h2 className="heading2 mb-5">
          Product, defined by <br /> it’s customer
        </h2>
        <p className="paragraph">
          wanted is a web3 social app created for discovery. you <br /> tell us
          what you’re interested in, and we help you find <br /> others to share
          your interests.
        </p>
        <div className="buy-unix-token-btn flex float-start gap-2.5 items-center mt-[56px]">
          <img src={gardenCart} alt="garden-cart" />
          <span className="buy-btn-gradiant paragraph">Buy unix token</span>
        </div>
        <div className=" absolute top-[100px] -left-[320px]">
          <img src={sectionFourEllipse2} alt="section-three" />
        </div>
      </div>
      <div className=" relative">
        <div className=" absolute -right-[250px] -top-[70px] -z-10">
          <img src={sectionFourEllipse1} alt="section-three" />
        </div>
        <div>
          <img src={sectionFourImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
