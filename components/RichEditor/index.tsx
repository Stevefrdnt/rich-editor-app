import { useCallback, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact, RenderElementProps } from "slate-react";
import CustomParagraph from "./components/CustomParagraph";
import { Heading, SubHeading } from "./components/Heading";

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "Editor Here" }],
  },
  {
    type: "heading",
    children: [{ text: "This is Title" }],
    level: 1,
  },
  {
    type: "sub-heading",
    children: [{ text: "This is Title" }],
    level: 3,
  },
];

const RichEditor = () => {
  const [slateEditor] = useState(() => withReact(createEditor()));

  const handleCustomElement = useCallback((props: RenderElementProps) => {
    const elType = props.element.type;

    if (elType === "heading") return <Heading {...props} />;
    if (elType === "sub-heading") return <SubHeading {...props} />;

    return <CustomParagraph {...props} />;
  }, []);

  return (
    <>
      <Slate editor={slateEditor} value={initialValue}>
        <Editable renderElement={handleCustomElement} />
      </Slate>
    </>
  );
};

export default RichEditor;
