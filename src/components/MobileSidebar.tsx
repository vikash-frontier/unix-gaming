import { FC } from "react";
import { closeIcon, downGray } from "../assets";

interface IMobileSidebarProps {
  active: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileSidebar: FC<IMobileSidebarProps> = ({ active, setHamburger }) => {
  return (
    <aside className={active ? "mobileSidebar open pt-10 relative" : "hidden"}>
      <img
        className="absolute right-6 top-10"
        src={closeIcon}
        width={24}
        height={24}
        alt="Logo"
        onClick={() => setHamburger(false)}
      />
      <ul className="px-5 pt-10">
        <li className="mb-10">
          <div
            className={` paragraph text-[20px] cursor-pointer  text-text-50 flex items-center gap-1 px-2 py-1.5 rounded hover:bg-secondary-100 hover:text-text-900 dark:hover:bg-secondary-900 dark:hover:text-text-50`}
            onClick={() => setHamburger(false)}
          >
            Home
          </div>
        </li>
        <li className="mb-10">
          <div
            className={`header-menu paragraph text-[20px] cursor-pointer  text-text-50 flex items-center gap-1 px-2 py-1.5 rounded relative `}
            onClick={() => setHamburger(false)}
          >
            Products
            <img
              src={downGray}
              className="w-6 h-6 absolute top-[6px] right-0"
              alt="expand"
            />
          </div>
        </li>
        <li className="mb-10">
          <div
            className={`header-menu paragraph text-[20px] cursor-pointer text-text-50 px-2 py-1.5 rounded relative`}
          >
            Buy unix token{" "}
            <img
              src={downGray}
              className="w-6 h-6 absolute top-[6px] right-0"
              alt="expand"
            />
          </div>
        </li>

        <li className="mb-10">
          <div
            className={`header-menu paragraph text-[20px] cursor-pointer text-text-50 px-2 py-1.5 rounded relative `}
          >
            Community{" "}
            <img
              src={downGray}
              className="w-6 h-6 absolute top-[6px] right-0"
              alt="expand"
            />
          </div>
        </li>
        <li className="mb-10">
          <div
            className={` buy-unix-token-btn header-menu paragraph text-[20px] !w-[200px] cursor-pointer text-text-50 px-2 py-1.5 text-center rounded relative `}
          >
            Login
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default MobileSidebar;
