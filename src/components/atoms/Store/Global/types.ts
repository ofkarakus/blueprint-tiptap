import { ReactNode } from "react";

export type InitialState = {
  textBlocks: Block[];
  contextMenu: {
    isVisible: boolean;
    points: Points;
  };
  counter: number;
};

export type Points = {
  x: number;
  y: number;
};

export type Block = { id: number; block: ReactNode };

export type Action =
  | { type: "ADD_BLOCK"; payload: ReactNode }
  | { type: "REMOVE_BLOCK" }
  | { type: "OPEN_CONTEXT_MENU"; payload: Points }
  | { type: "CLOSE_CONTEXT_MENU" };
