export type AnyObject = Record<string, unknown>;
export type EmptyObject = Record<string, never>;

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    callback?: Function;
}

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    callback?: Function;
}

export type D3Selection = d3.Selection<d3.BaseType, unknown, HTMLElement, any>;

export type Size = { width: number; height: number };

export type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
