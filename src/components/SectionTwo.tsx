import { MARKETING_DATA } from "../utils/mockData";

const SectionTwo = () => {
  return (
    <div>
      <div className="section-two-bg"></div>
      <div className=" container mx-auto flex gap-3 justify-between ">
        {MARKETING_DATA.map((item) => (
          <div
            key={item.id}
            className="card-item lg:w-[250px] lg:h-[250px] flex flex-col justify-center items-center "
          >
            <img src={item.imageUrl} alt={`${item.name}`} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
