import {
  facebookIcon,
  instaIcon,
  logoBg,
  sectionFooter,
  whatsappIcon,
} from "../assets";

const Footer = () => {
  return (
    <footer className=" container mx-auto md:mt-[257px] mt-[150px]  flex flex-col justify-center items-center relative mb-[100px] md:mb-0">
      <img
        src={sectionFooter}
        alt=""
        className=" absolute -top-[650px] -left-[350px]"
      />

      <div className=" flex gap-[17px] items-center">
        <div className="relative w-[100px] h-[100px]">
          <img src={logoBg} alt="logo" />
          <h2 className=" text-primary font-sans text-[50px] font-extrabold absolute top-4 right-8">
            U
          </h2>
        </div>
        <h2 className="heading2 !leading-[50px]">
          unix <br /> gaming
        </h2>
      </div>

      <div className=" flex gap-[30px] mt-12 ">
        <img
          src={whatsappIcon}
          alt="whatsapp"
          className="social-icon py-[15px] px-[14px]"
        />
        <img
          src={instaIcon}
          alt="instagram"
          className="social-icon py-[15px] px-[14px]"
        />
        <img
          src={facebookIcon}
          alt="facebook"
          className="social-icon py-[15px] px-[14px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
