import { Editor, Text, Transforms } from "slate";
import { useSlate } from "slate-react";

import { PARAGRAPH } from "constants/element";

import type { ElementTypeProps, TextFormatProps } from "./interface";

const useCustomEditor = () => {
  const editor = useSlate();

  const isFormatActive = ({ format }: TextFormatProps) => {
    const [match] = Editor.nodes(editor, {
      match: (node) => (node as any)[format] === true,
      mode: "all",
    });
    return Boolean(match);
  };

  const toggleFormat = ({ format }: TextFormatProps) => {
    const isActive = isFormatActive({ format });
    Transforms.setNodes(
      editor,
      { [format]: isActive ? false : true },
      { match: Text.isText, split: true }
    );
  };

  const toggleType = ({ type }: ElementTypeProps) => {
    const isActive = isFormatActive({ format: type });

    Transforms.setNodes(
      editor,
      { type: isActive ? PARAGRAPH : type },
      { match: (node) => Editor.isBlock(editor, node) }
    );
  };

  return {
    isFormatActive,
    toggleFormat,
    toggleType,
  };
};

export default useCustomEditor;
