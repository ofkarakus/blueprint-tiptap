import { Props } from "react-rnd";
import { textBlockStyle, textBlockDefault } from "./utils";
import * as e from "./styles";
import { useStore } from "utils/hooks";

const Resizable = (props: Props & { type?: string, id?: number }) => {
  const { focusedBlockId } = useStore()

  switch (props.type) {
    case "text":
      return (
        <e.StyledRnd default={textBlockDefault} style={textBlockStyle} isFocused={props.id === focusedBlockId} {...props}></e.StyledRnd>
      );
    default:
      return <e.StyledRnd {...props}></e.StyledRnd>;
  }
};

export default Resizable;
