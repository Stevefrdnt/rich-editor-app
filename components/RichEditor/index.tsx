import { useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const RichEditor = () => {
  const [slateEditor] = useState(() => withReact(createEditor()));

  return (
    <>
      <Slate editor={slateEditor} value={initialValue}>
        <Editable />
      </Slate>
    </>
  );
};

export default RichEditor;
