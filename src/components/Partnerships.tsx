import { PARTNERSHIPS_DATA } from "../utils/mockData";

const Partnerships = () => {
  return (
    <div className=" w-full container grid grid-cols-5 grid-flow-row-dense place-content-center gap-5 mt-[30px] ">
      {PARTNERSHIPS_DATA.map(({ id, imageUrl }) => (
        <div
          key={id}
          className="partnership-card flex items-center justify-center max-w-[250px] max-h-[107px] "
        >
          <img src={imageUrl} alt="partnership-img" className="" />
        </div>
      ))}
    </div>
  );
};

export default Partnerships;
