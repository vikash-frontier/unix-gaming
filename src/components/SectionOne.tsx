import { heroImg } from "../assets";

const SectionOne = () => {
  return (
    <div className=" h-screen md:flex md:flex-start md:items-center container md:mx-auto  ">
      <div className=" flex flex-col items-center md:items-start  relative">
        <h2 className="heading1 text-center md:text-start !leading-[100px]    mb-4">
          Kickstart your web3 game
        </h2>
        <img src={heroImg} alt="hero-img" className=" block md:hidden mb-10" />
        <button className="paragraph primaryBtnGradient rounded-[40px] py-5 pr-[39px] pl-[27px]">
          Kickstart my game
        </button>
      </div>

      <img
        className="hero-img hidden md:block float-end relative "
        src={heroImg}
        alt="hero-img"
      />
    </div>
  );
};

export default SectionOne;
