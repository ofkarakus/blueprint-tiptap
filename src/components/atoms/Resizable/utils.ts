import { template, textBlock } from "utils/constants";

export const textBlockStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "dashed 1px black",
  background: "transparent",
};

export const textBlockDefault = {
  x: template.width / 2 - textBlock.width / 2,
  y: template.height / 2 - textBlock.height / 2,
  width: textBlock.width,
  height: textBlock.height,
};
