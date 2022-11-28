import { RenderElementProps } from "slate-react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const CustomParagraph = ({ attributes, children }: RenderElementProps) => {
  return <Paragraph {...attributes}>{children}</Paragraph>;
};

export default CustomParagraph;
