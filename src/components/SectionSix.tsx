import { sectionSixElippse, sectionSixImg } from "../assets";

const SectionSix = () => {
  return (
    <div className="container mx-auto relative">
      <div className=" absolute -bottom-[150px] -right-[450px] hidden md:block">
        <img src={sectionSixElippse} alt="ellipse-six" />
      </div>
      <div className="md:email-card-container md:flex md:justify-between md:px-[62px] md:py-[113px] md:w-full">
        <div>
          <h2 className="heading2 mb-2.5 hidden md:block">
            Get unix gaming <br /> updates.
          </h2>
          <h2 className="heading2 mb-2.5 text-center md:hidden">
            Get unix gaming updates.
          </h2>
          <p className="paragraph hidden md:block">
            when it comes to partnering new blockchain games, we <br /> only
            want to partner with project of class,continue to <br /> drive the
            future evolution of blockchaining games.
          </p>
          <p className="paragraph md:hidden text-center">
            when it comes to partnering new blockchain games, we only want to
            partner with project of class,continue to drive the future evolution
            of blockchaining games.
          </p>
          <div className="md:hidden flex justify-center items-center">
            <img src={sectionSixImg} alt="email-img" />
          </div>
          <div className="mt-[52px] relative">
            <input
              type="text"
              placeholder="Your email here"
              className="paragraph email-inp md:py-[17px] md:px-[54px] py-[15px] px-[35px] md:text-[33px] md:w-[660px] text-[14px] w-full placeholder-white"
            />

            <button className="email-inp paragraph md:py-[17px] py-[15px] px-[35px] md:px-[54px] md:text-[33px] text-[14px] inline-block absolute right-0 active:border-none ">
              Submit
            </button>
          </div>
        </div>
        <div className=" md:block hidden">
          <img src={sectionSixImg} alt="email-img" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
