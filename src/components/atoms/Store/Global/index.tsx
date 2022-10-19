import * as duck from './duck';
import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

export const { Provider: GlobalStateProvider, useTracked: useGlobalState } = createContainer(() =>
    useReducer(duck.reducer, duck.initialState),
);
