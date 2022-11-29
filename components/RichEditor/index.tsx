import { useEffect, useMemo, useState } from "react";
import { createEditor, Editor, Transforms } from "slate";
import { Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";

import EditableEditor from "./components/EditableEditor";
import HoverMenu from "./components/HoverMenu";
import { dummyValue, initialValue } from "constants/content";
import { notification } from "antd";

const RichEditor = () => {
  const slateEditor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [isUseData, setIsUseData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      notification.open({
        message: "Hi There!",
        description:
          "I also provide predifine text, try it by clicking this notification",
        duration: 10000,
        type: "info",
        onClick: () => {
          console.log("CLICK");
          setIsUseData(true);
        },
      });
    }, 2000);
  }, []);

  useEffect(() => {
    if (isUseData && slateEditor) {
      // Delete all entries leaving 1 empty node
      Transforms.delete(slateEditor, {
        at: {
          anchor: Editor.start(slateEditor, []),
          focus: Editor.end(slateEditor, []),
        },
      });

      // Removes empty node
      Transforms.removeNodes(slateEditor, {
        at: [0],
      });

      // Insert array of children nodes
      Transforms.insertNodes(slateEditor, dummyValue);
    }
  }, [isUseData, slateEditor]);

  return (
    <div>
      <Slate editor={slateEditor} value={initialValue}>
        <HoverMenu />
        <EditableEditor />
      </Slate>
    </div>
  );
};

export default RichEditor;
