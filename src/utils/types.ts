export type AnyObject = Record<string, unknown>;
export type EmptyObject = Record<string, never>;

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type D3Selection = d3.Selection<d3.BaseType, unknown, HTMLElement, any>;

export type Size = { width: number; height: number };

export type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
