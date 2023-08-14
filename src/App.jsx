import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import VideoDetails from './pages/VideoDetails';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exactt path="/video/:id">
          <VideoDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App
