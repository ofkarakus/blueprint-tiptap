import { GlobalStateProvider } from 'components/atoms/Store/Global';
import Body from 'components/organisms/Body';

function App() {
    return (
        <GlobalStateProvider>
            <Body />
        </GlobalStateProvider>
    );
}

export default App;
