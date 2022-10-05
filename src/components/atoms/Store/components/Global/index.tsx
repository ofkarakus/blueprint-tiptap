import * as duck from "./duck";
import { useState } from "react";
import { createContainer } from "react-tracked";

const useMyState = () => useState(duck.initialState);

export const { Provider: GlobalStateProvider, useTracked: useGlobalState } =
  createContainer(useMyState);
