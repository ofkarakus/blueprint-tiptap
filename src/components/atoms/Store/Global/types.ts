import { ReactNode } from "react";

export type InitialState = {
  textBlocks: ReactNode[];
  contextMenu: {
    isVisible: boolean;
    points: {
      x: number;
      y: number;
    };
  };
};
