import { downIcon, heroTwo, heroTwoBgImg1, heroTwoBgImg2 } from "../assets";
import { GAMER_DATA } from "../utils/mockData";
import GamersItem from "./GamersItem";

const SectionThree = () => {
  return (
    <div className="container mx-auto md:mt-20 mt-14">
      <div>
        <h2 className="heading2 text-center">The unix ecosystem</h2>
        <p className="paragraph text-center md:block hidden">
          wanted is a web3 social app created for discovery. you tell us what
          you’re
          <br />
          interested in, and we help you find others to share your interests.
        </p>
        <p className="paragraph text-center md:hidden">
          wanted is a web3 social app created for discovery. you tell us what
          you’re interested in, and we help you find others to share your
          interests.
        </p>
      </div>
      <div className=" md:flex md:justify-between md:items-center">
        <div className=" relative">
          <div className=" absolute top-[250px] left-0 -z-10">
            <img src={heroTwoBgImg1} alt="hero-bg-img" />
          </div>
          <div className=" absolute top-[250px] left-40 -z-10">
            <img src={heroTwoBgImg2} alt="hero-bg-img" />
          </div>
          <img src={heroTwo} alt="hero-two" />
        </div>
        <div>
          <p className="max-w-[443.867px] paragraph plateform-dropdown flex gap-6 py-[18px] cursor-pointer mb-5">
            <img src={downIcon} alt="down-icon" className="pl-7" />
            <span> Platform for gamers</span>
          </p>
          <p className="paragraph mb-[31px] md:block hidden">
            owned is not another p2e platform. It’s the only <br /> platform
            that puts games & gamers first. find <br /> play-to-own games based
            on user review.
          </p>
          <p className="paragraph mb-[31px] md:hidden text-center">
            owned is not another p2e platform. It’s the only <br /> platform
            that puts games & gamers first. find <br /> play-to-own games based
            on user review.
          </p>
          <div className="gamers-item-contaier ">
            {GAMER_DATA.map(({ id, name, content }) => (
              <GamersItem key={id} name={name} content={content} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
