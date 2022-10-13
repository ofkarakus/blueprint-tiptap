import { useTrackedState } from "../../atoms/Store/Global";
import * as e from "./styles";

const Template = () => {
  const state = useTrackedState();

  return <e.Wrapper id="editor-template">{state.textBlocks}</e.Wrapper>;
};

export default Template;
