import { RenderElementProps } from "slate-react";
import style from "./Tips.module.css";

const Tips = ({ attributes, children }: RenderElementProps) => {
  return (
    <div {...attributes} className={style.styContainer}>
      {children}
    </div>
  );
};

export default Tips;
