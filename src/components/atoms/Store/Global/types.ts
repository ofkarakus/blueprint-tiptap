export type InitialState = {
  shapes: Array<d3.Selection<SVGRectElement, unknown, HTMLElement, any>>;
  handlers: Array<
    d3.Selection<
      SVGCircleElement,
      {
        id: string;
        class: string;
        x: number;
        y: number;
      },
      d3.BaseType,
      unknown
    >
  >;
};
