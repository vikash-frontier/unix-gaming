export interface IIconWrapperPropsType {
  icon: string;
  alt: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export const IconWrapper = ({
  icon,
  alt,
  className,
  iconClassName,
  onClick,
}: IIconWrapperPropsType) => {
  return (
    <div
      role={"presentation"}
      className={`relative border p-2 border-secondary-100 dark:border-secondaryDark-100 h-9 w-9 rounded-full lg:hover:bg-secondary-900/10 lg:dark:hover:bg-secondaryDark-900/10 cursor-pointer  ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      <img
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          iconClassName ?? ""
        }`}
        src={icon}
        alt={alt}
      />
    </div>
  );
};
