import * as e from "./App.styles";
import Toolbar from "./components/molecules/Toolbar";
import Body from "./components/organisms/Body";

function App() {
  return (
    <e.Wrapper>
      <Toolbar />
      <Body />
    </e.Wrapper>
  );
}

export default App;
