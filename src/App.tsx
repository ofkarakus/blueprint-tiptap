import { GlobalStateProvider } from "components/atoms/Store/Global";
import Body from "components/organisms/Body";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <GlobalStateProvider>
        <Body />
      </GlobalStateProvider>
    </React.StrictMode>
  );
}

export default App;
