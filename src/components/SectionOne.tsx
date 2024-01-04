import { heroImg, lendingEllipseOne, lendingEllipseTwo } from "../assets";

const SectionOne = () => {
  return (
    <div className="h-screen md:flex md:justify-between md:items-center container md:mx-auto relative mt-8">
      <div className=" absolute -left-[150px] -top-[200px] opacity-90  blur-[121.73780822753906px] hidden md:block">
        <img src={lendingEllipseOne} alt="ellipse-len" />
      </div>
      <div className=" absolute -right-[150px] -top-[200px] opacity-90   blur-[121.73780822753906px] hidden md:block">
        <img src={lendingEllipseTwo} alt="ellipse-len" />
      </div>
      <div className=" flex flex-col items-center md:items-start">
        <h2 className="heading1 text-center md:text-start  mb-4">
          Kickstart your web3 game
        </h2>
        <p className=" paragraph md:mb-[59px] text-center md:text-start">
          unix gaming provides what all games need to succed:
          <br />
          gamers, technology & funding
        </p>
        <img src={heroImg} alt="hero-img" className=" block md:hidden mb-10" />
        <button className="paragraph primaryBtnGradient rounded-[40px] py-5 pr-[39px] pl-[27px]">
          Kickstart my game
        </button>
      </div>

      <img className="hero-img hidden md:block " src={heroImg} alt="hero-img" />
    </div>
  );
};

export default SectionOne;
