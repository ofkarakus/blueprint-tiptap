import { ReactNode } from "react";

export type InitialState = {
  textBlocks: ReactNode[];
  contextMenu: {
    isVisible: boolean;
    points: Points;
  };
};

export type Points = {
  x: number;
  y: number;
};

export type Action =
  | { type: "ADD_BLOCK"; payload: ReactNode }
  | { type: "OPEN_CONTEXT_MENU"; payload: Points };
