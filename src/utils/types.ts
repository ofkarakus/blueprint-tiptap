export type AnyObject = Record<string, unknown>;
export type EmptyObject = Record<string, never>;

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: Function;
}

export type D3Selection = d3.Selection<SVGGElement, unknown, HTMLElement, any>;

export type Size = { width: number; height: number };
