import "./styles/App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/01. Home";
import About from "./pages/02.About";
import Academic from "./pages/03.Academic";
import Projects from "./pages/04.Projects";
import NotFound from "./pages/05.NotFound";


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
            path="/academic"
            render={ (props) => <Academic { ...props } /> }
          />
          <Route
            exact
            path="/projects"
            render={ (props) => <Projects { ...props } /> }
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
