import * as e from "./styles";
import Toolbar from "components/molecules/Toolbar";
import Template from "components/molecules/Template";
import { useActions } from "utils/hooks";
import { useEffect } from "react";

const Body = () => {
  const { closeContextMenu } = useActions();

  useEffect(() => {
    window.addEventListener("click", closeContextMenu);
    return () => window.removeEventListener("click", closeContextMenu);
  }, [closeContextMenu]);

  return (
    <e.Wrapper>
      <Toolbar />
      <Template />
    </e.Wrapper>
  );
};

export default Body;
