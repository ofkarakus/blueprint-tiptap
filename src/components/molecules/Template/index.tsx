import { removeHandler } from "../../../utils/helpers";
import { useTrackedState } from "../../atoms/Store/Global";
import * as e from "./styles";

const Template = () => {
  const state = useTrackedState();

  return (
    <e.Wrapper id="editor-template" onClick={removeHandler}>
      {state.textBlocks}
    </e.Wrapper>
  );
};

export default Template;
