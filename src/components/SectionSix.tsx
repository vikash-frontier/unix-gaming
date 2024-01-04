import { sectionSixElippse, sectionSixImg } from "../assets";

const SectionSix = () => {
  return (
    <div className="container mx-auto relative">
      <div className=" absolute -bottom-[150px] -right-[450px]">
        <img src={sectionSixElippse} alt="ellipse-six" />
      </div>
      <div className="email-card-container flex justify-between px-[62px] py-[113px] w-full">
        <div>
          <h2 className="heading2 mb-2.5">
            Get unix gaming <br /> updates.
          </h2>
          <p className="paragraph">
            when it comes to partnering new blockchain games, we <br /> only
            want to partner with project of class,continue to <br /> drive the
            future evolution of blockchaining games.
          </p>

          <div className="mt-[52px] relative">
            <input
              type="text"
              placeholder="Your email here"
              className="paragraph email-inp py-[17px] px-[54px] text-[33px] w-[660px] placeholder-white"
            />
            <button className="email-inp paragraph py-[17px] px-[54px] text-[33px] inline-block absolute right-0 active:border-none ">
              Submit
            </button>
          </div>
        </div>
        <div>
          <img src={sectionSixImg} alt="email-img" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
