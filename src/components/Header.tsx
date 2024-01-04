import { logo } from "../assets";

const Header = () => {
  return (
    <>
      <header
        className={` container mx-auto mt-8 md:mt-16  flex justify-between items-center overflow-x-hidden`}
      >
        <img src={logo} alt="Logo" />
        <nav className={` flex gap-[30px] items-center list-none`}>
          <li className=" text-primary">Home</li>
          <li className=" text-primary">Products</li>
          <li className=" text-primary">Buy unix token</li>
          <li className=" text-primary">Community</li>
        </nav>
        <button className="secondaryBtnGradient p-[1px] paragraph_medium inline-block rounded-[36px] cursor-pointer hover:!hoverSecondaryBtnGradient  text-primary ">
          Login
        </button>
      </header>
    </>
  );
};

export default Header;
