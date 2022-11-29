export const PARAGRAPH = "paragraph";
export const HEADING = "heading";
export const SUB_HEADING = "sub-heading";
export const CODE_BLOCK = "code-block";
export const TIPS = "tips";

export type ElementKeyProps =
  | typeof PARAGRAPH
  | typeof HEADING
  | typeof SUB_HEADING
  | typeof CODE_BLOCK
  | typeof TIPS;
