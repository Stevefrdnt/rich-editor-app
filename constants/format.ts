import { CODE_BLOCK } from "./element";

export const BOLD = "bold";
export const ITALIC = "italic";
export const UNDERLINE = "underline";

// text format var with following format [user-input-key]: "format-string-key"
export type FormatKeyProps = "b" | "i" | "u";
export const TEXT_FORMAT = {
  b: BOLD,
  i: ITALIC,
  u: UNDERLINE,
};

export type FormatTypeProps = "c";
export const TYPE_FORMAT = {
  c: CODE_BLOCK,
};
