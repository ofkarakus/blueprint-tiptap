import { Rnd } from "react-rnd";
import { Props } from "react-rnd";
import { textBlockStyle, textBlockDefault } from "./utils";

const Resizable = (props: Props & { type?: string }) => {
  switch (props.type) {
    case "text":
      return (
        <Rnd default={textBlockDefault} style={textBlockStyle} {...props}></Rnd>
      );
    default:
      return <Rnd {...props}></Rnd>;
  }
};

export default Resizable;
