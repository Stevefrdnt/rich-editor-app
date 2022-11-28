import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type TextFormat = { text: string; bold?: true };
export type TitleFormat = { text: string };

export type ParagraphElement = {
  type: "paragraph";
  children: TextFormat[];
};

export type HeadingElement = {
  type: "heading";
  level: number;
  children: TitleFormat[];
};

export type SubHeadingElement = {
  type: "sub-heading";
  level: number;
  children: TitleFormat[];
};

type CustomEditor = BaseEditor & ReactEditor;
type CustomElement = ParagraphElement | HeadingElement | SubHeadingElement;
type CustomText = TextFormat;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
