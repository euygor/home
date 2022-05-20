import * as C from './App.Styles';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import { MainRoutes } from './routes';

const App = () => {

  return (
    <C.Container>
      <C.Grid>

        <LeftSide />

        <MainRoutes />

        <RightSide />

      </C.Grid>
    </C.Container>
  );
}

export default App;