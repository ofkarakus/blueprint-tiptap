import * as types from "./types";
import * as e from "./styles";

const Button = ({ onClick, disabled, className, children }: types.Props) => {
  return (
    <e.Wrapper onClick={onClick} disabled={disabled} className={className}>
      {children}
    </e.Wrapper>
  );
};

export default Button;
