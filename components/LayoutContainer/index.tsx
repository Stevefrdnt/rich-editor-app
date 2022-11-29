import { LayoutContainerProps } from "./interface";
import style from "./LayoutContainer.module.css";

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return <div className={style.styContainer}>{children}</div>;
};

export default LayoutContainer;
