import { RenderElementProps } from "slate-react";
import { Typography } from "antd";

const { Title } = Typography;

const Heading = ({ attributes, children }: RenderElementProps) => {
  return (
    <Title level={1} {...attributes}>
      {children}
    </Title>
  );
};

const SubHeading = ({ attributes, children }: RenderElementProps) => {
  return (
    <Title level={3} {...attributes}>
      {children}
    </Title>
  );
};

// need to be seperated in case they have seperate styling in the future
export { Heading, SubHeading };
