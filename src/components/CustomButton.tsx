import type { ReactNode } from "react";

export const CustomButton = ({
  children,
  onclick,
  variant,
}: {
  children: ReactNode;
  onclick: () => void;
  variant: string;
}) => {
  let className = "px-5.5 text-white  py-2 rounded-2xl transition-all hover:shadow-lg hover:shadow-gray-500 hover:translate-0.5";

  switch (variant) {
    case "start":
        className += " bg-green-500"
      break;
    case "stop" :
        className += " bg-red-500";
        break
    case "reset" :
        className += " bg-yellow-500";
        break
    default:
      className;
  }

  return <button className={className} onClick={onclick}>{children}</button>;
};
