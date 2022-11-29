import { Descendant } from "slate";
import { CODE_BLOCK, HEADING, PARAGRAPH, SUB_HEADING, TIPS } from "./element";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const initialValue: Descendant[] = [
  {
    type: HEADING,
    children: [{ text: "Story Title" }],
  },
  {
    type: PARAGRAPH,
    children: [{ text: "Tell your story..." }],
  },
];

export const dummyValue: Descendant[] = [
  {
    type: HEADING,
    children: [{ text: "This is My Story" }],
  },
  {
    type: PARAGRAPH,
    children: [{ text: LOREM, bold: true }],
  },
  {
    type: PARAGRAPH,
    children: [{ text: LOREM, italic: true }],
  },
  {
    type: SUB_HEADING,
    children: [{ text: "This is Sub Story" }],
  },
  {
    type: PARAGRAPH,
    children: [{ text: LOREM, underline: true }],
  },
  {
    type: TIPS,
    children: [{ text: LOREM }],
  },
  {
    type: CODE_BLOCK,
    children: [{ text: LOREM }],
  },
];
