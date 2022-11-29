import { CustomEditor } from "components/RichEditor/interface";
import { ElementKeyProps } from "constants/element";

export type useCustomEditorProps = {
  editor: CustomEditor;
};

export type TextFormatProps = {
  format: string;
};

export type ElementTypeProps = {
  type: ElementKeyProps;
};
