import { ReactNode } from "react";

export type InitialState = {
  textBlocks: Block[];
  contextMenu: {
    isVisible: boolean;
    points: Points;
  };
  blockIdCounter: number;
  selectedBlockId: number;
};

export type Points = {
  x: number;
  y: number;
};

export type Block = { id: number; block: ReactNode };

export type Action =
  | { type: "ADD_BLOCK"; payload: ReactNode }
  | { type: "REMOVE_BLOCK"; payload: number }
  | { type: "OPEN_CONTEXT_MENU"; payload: { points: Points; blockId: number } }
  | { type: "CLOSE_CONTEXT_MENU" };
