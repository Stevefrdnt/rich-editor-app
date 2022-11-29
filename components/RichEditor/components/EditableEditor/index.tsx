import { KeyboardEvent, useCallback, useEffect } from "react";
import { Editable, RenderElementProps, RenderLeafProps } from "slate-react";

import { Heading, SubHeading } from "components/RichEditor/components/Heading";
import CodeBlock from "components/RichEditor/components/CodeBlock";
import CustomParagraph from "components/RichEditor/components/CustomParagraph";
import Leaf from "components/RichEditor/components/Leaf";
import Tips from "components/RichEditor/components/Tips";
import useCustomEditor from "components/RichEditor/hooks/useCustomEditor";

import {
  FormatKeyProps,
  FormatTypeProps,
  TEXT_FORMAT,
  TYPE_FORMAT,
} from "constants/format";
import {
  CODE_BLOCK,
  ElementKeyProps,
  HEADING,
  TIPS,
  SUB_HEADING,
} from "constants/element";

const EditableEditor = () => {
  const { toggleFormat, toggleType } = useCustomEditor();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const key = event?.key || "";
      const ctrlKey = event?.ctrlKey || event?.metaKey;

      if (ctrlKey) {
        if (TEXT_FORMAT?.[key as FormatKeyProps]) {
          event.preventDefault();
          toggleFormat({ format: TEXT_FORMAT?.[key as FormatKeyProps] });
        }
        if (TYPE_FORMAT?.[key as FormatTypeProps]) {
          event.preventDefault();
          toggleType({
            type: TYPE_FORMAT?.[key as FormatTypeProps] as ElementKeyProps,
          });
        }
      }
    },
    [toggleFormat, toggleType]
  );

  const handleCustomElement = useCallback((props: RenderElementProps) => {
    const elType = props.element.type;

    if (elType === HEADING) return <Heading {...props} />;
    if (elType === SUB_HEADING) return <SubHeading {...props} />;
    if (elType === CODE_BLOCK) return <CodeBlock {...props} />;
    if (elType === TIPS) return <Tips {...props} />;
    return <CustomParagraph {...props} />;
  }, []);

  const handleRenderLeaf = useCallback((leafProps: RenderLeafProps) => {
    return <Leaf {...leafProps} />;
  }, []);

  return (
    <Editable
      placeholder='Tell us your story'
      renderElement={handleCustomElement}
      renderLeaf={handleRenderLeaf}
      onKeyDown={handleKeyPress}
    />
  );
};

export default EditableEditor;
