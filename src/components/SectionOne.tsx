import { heroImg } from "../assets";

const SectionOne = () => {
  return (
    <div className=" hero-container container mx-auto">
      <div>
        <h2 className="heading1 mb-4">Kickstart your web3 game</h2>
        <p className=" paragraph mb-[59px]">
          unix gaming provides what all games need to succed:
          <br />
          gamers, technology & funding
        </p>
        <button className="paragraph primaryBtnGradient rounded-[40px] py-5 pr-[39px] pl-[27px]">
          Kickstart my game
        </button>
      </div>

      <img className="hero-img" src={heroImg} alt="hero-img" />
    </div>
  );
};

export default SectionOne;
