import { leftIcon } from "../assets";
import { GAMER_DATA } from "../utils/mockData";

const GamersItem = () => {
  return (
    <div className="gamers-item-contaier">
      {GAMER_DATA.map(({ id, name }) => (
        <div
          key={id}
          className=" border-y-[1px] border-primary/20 py-4 flex gap-8 items-center"
        >
          <img src={leftIcon} alt="left-icon" />
          <span className="paragraph">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default GamersItem;
