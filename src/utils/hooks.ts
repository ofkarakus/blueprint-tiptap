import { useGlobalState } from "../components/atoms/Store/Global";
import { actions } from "../components/atoms/Store/Global/duck";

export const useActions = () => {
  const [, dispatch] = useGlobalState();
  return actions(dispatch);
};

export const useStore = () => {
  const [state] = useGlobalState();
  return state;
};
