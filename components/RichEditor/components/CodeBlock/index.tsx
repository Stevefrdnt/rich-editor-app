import { RenderElementProps } from "slate-react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const CodeBlock = ({ attributes, children }: RenderElementProps) => {
  return (
    <Paragraph keyboard {...attributes}>
      {children}
    </Paragraph>
  );
};

export default CodeBlock;
