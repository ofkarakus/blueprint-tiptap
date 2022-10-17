import * as types from "./types";

export const initialState: types.InitialState = {
  textBlocks: [],
  contextMenu: {
    isVisible: false,
    points: {
      x: 0,
      y: 0,
    },
  },
};
