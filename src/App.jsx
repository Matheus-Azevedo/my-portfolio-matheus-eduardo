import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/01. Home';
import About from './pages/02.About';
import Professional from './pages/03.Professional';
import Comments from './pages/04.Comments';
import NotFound from './pages/05.NotFound';


function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } /> }
          />
          <Route
            exact
            path="/about"
            render={ (props) => <About { ...props } /> }
          />
          <Route
            exact
            path="/professional"
            render={ (props) => <Professional { ...props } /> }
          />
          <Route
            exact
            path="/Comment"
            render={ (props) => <Comments { ...props } /> }
          />
          <Route
            exact
            path="*"
            render={ (props) => <NotFound { ...props } /> }
          />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
