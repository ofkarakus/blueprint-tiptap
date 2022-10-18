import { Props } from "react-rnd";
import { textBlockStyle, textBlockDefault } from "./utils";
import * as e from "./styles";

const Resizable = (props: Props & { type?: string }) => {
  switch (props.type) {
    case "text":
      return (
        <e.StyledRnd default={textBlockDefault} style={textBlockStyle} {...props}></e.StyledRnd>
      );
    default:
      return <e.StyledRnd {...props}></e.StyledRnd>;
  }
};

export default Resizable;
