import { removeHandler } from "../../../utils/helpers";
import * as e from "./styles";

const Template = () => {
  return (
    <e.Svg id="editor-template" onClick={removeHandler}>
      <e.G id="shapes"></e.G>
      <e.G id="handlers"></e.G>
    </e.Svg>
  );
};

export default Template;
