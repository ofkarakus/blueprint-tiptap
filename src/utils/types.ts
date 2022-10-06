export type AnyObject = Record<string, unknown>;
export type EmptyObject = Record<string, never>;

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: Function;
}
