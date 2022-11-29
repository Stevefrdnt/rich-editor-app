import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import {
  CODE_BLOCK,
  HEADING,
  PARAGRAPH,
  TIPS,
  SUB_HEADING,
} from "constants/element";

export type TextFormat = {
  bold?: boolean;
  italic?: boolean;
  text: string;
  underline?: boolean;
};

export type ParagraphElement = {
  type: typeof PARAGRAPH;
  children: Descendant[];
};

export type HeadingElement = {
  type: typeof HEADING;
  children: Descendant[];
};

export type SubHeadingElement = {
  type: typeof SUB_HEADING;
  children: Descendant[];
};

export type CodeBlockElement = {
  type: typeof CODE_BLOCK;
  children: Descendant[];
};

export type TipsElement = {
  type: typeof TIPS;
  children: Descendant[];
};

type CustomElement =
  | ParagraphElement
  | HeadingElement
  | SubHeadingElement
  | CodeBlockElement
  | TipsElement;

type CustomText = TextFormat;
export type CustomEditor = BaseEditor & ReactEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
