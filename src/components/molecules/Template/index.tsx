import { useEffect, useRef } from "react";
import { useGlobalState } from "../../atoms/Store/Global";
import * as e from "./styles";

const Template = () => {
  const templateRef = useRef(null);
  const [state, setState] = useGlobalState();

  useEffect(() => {
    const setTemplateDiv = () =>
      setState((prev) => ({ ...prev, templateDiv: templateRef.current }));
    setTemplateDiv();
  }, []);

  return <e.Wrapper id="template" ref={templateRef}></e.Wrapper>;
};

export default Template;
