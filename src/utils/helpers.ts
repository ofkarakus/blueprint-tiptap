import * as d3 from "d3";
import { D3Selection, Size } from "./types";

export const createGroup = (template: Size, className: string) =>
  d3
    .select("#editor-template")
    .append("g")
    .attr(
      "transform",
      `translate(${template.width / 2}, ${template.height / 2})`
    )
    .attr("class", className);

export const createBlock = (group: D3Selection, block: Size) =>
  group
    .append("rect")
    .attr("width", block.width)
    .attr("height", block.height)
    .attr("x", -block.width / 2)
    .attr("y", -block.height / 2)
    .attr("stroke", "darkgray")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "3,3")
    .attr("fill", "transparent");

export const addHandler = (group: D3Selection, block: Size) =>
  group
    .selectAll("circle")
    .data(getHandlerPositionArr(block))
    .enter()
    .append("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("pos", (d) => d.pos)
    .attr("r", 3)
    .attr("fill", "blue");

export const getHandlerPositionArr = (block: Size) => {
  return [
    {
      pos: "top-left",
      x: -block.width / 2,
      y: -block.height / 2,
    },
    {
      pos: "top-middle",
      x: 0,
      y: -block.height / 2,
    },
    {
      pos: "top-right",
      x: block.width / 2,
      y: -block.height / 2,
    },
    {
      pos: "middle-right",
      x: block.width / 2,
      y: 0,
    },
    {
      pos: "bottom-right",
      x: block.width / 2,
      y: block.height / 2,
    },
    {
      pos: "bottom-middle",
      x: 0,
      y: block.height / 2,
    },
    {
      pos: "bottom-left",
      x: -block.width / 2,
      y: block.height / 2,
    },
    {
      pos: "middle-left",
      x: -block.width / 2,
      y: 0,
    },
  ];
};
