import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type TextFormat = { text: string; bold?: true };

export type ParagraphElement = {
  type: "paragraph";
  children: CustomText[];
};

type CustomEditor = BaseEditor & ReactEditor;
type CustomElement = ParagraphElement;
type CustomText = TextFormat;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
