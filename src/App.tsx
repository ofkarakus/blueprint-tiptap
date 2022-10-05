import * as e from "./App.styles";
import Toolbar from "./components/molecules/Toolbar";
import Body from "./components/organisms/Body";
import { GlobalStateProvider } from "./components/atoms/Store/Global";

function App() {
  return (
    <GlobalStateProvider>
      <e.Wrapper>
        <Toolbar />
        <Body />
      </e.Wrapper>
    </GlobalStateProvider>
  );
}

export default App;
