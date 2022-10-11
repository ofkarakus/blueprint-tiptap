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
    .attr("id", (d) => d.id)
    .attr("class", (d) => d.class)
    .attr("r", 3)
    .attr("fill", "blue");

export const removeHandler = () => d3.selectAll(".handler").remove();

export const getHandlerPositionArr = (block: Size) => {
  return [
    {
      id: "top-left-handler",
      class: "handler",
      x: -block.width / 2,
      y: -block.height / 2,
    },
    {
      id: "top-middle-handler",
      class: "handler",
      x: 0,
      y: -block.height / 2,
    },
    {
      id: "top-right-handler",
      class: "handler",
      x: block.width / 2,
      y: -block.height / 2,
    },
    {
      id: "middle-right-handler",
      class: "handler",
      x: block.width / 2,
      y: 0,
    },
    {
      id: "bottom-right-handler",
      class: "handler",
      x: block.width / 2,
      y: block.height / 2,
    },
    {
      id: "bottom-middle-handler",
      class: "handler",
      x: 0,
      y: block.height / 2,
    },
    {
      id: "bottom-left-handler",
      class: "handler",
      x: -block.width / 2,
      y: block.height / 2,
    },
    {
      id: "middle-left-handler",
      class: "handler",
      x: -block.width / 2,
      y: 0,
    },
  ];
};