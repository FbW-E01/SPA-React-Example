import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Error from './pages/Error';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <h1>App!!!!</h1>
      <Navigation />
      <Switch>
        {/* Regular path; matches /contact and /contact/us for example */}
        <Route path="/contact">
          <Contact />
        </Route>
        {/* Regular path */}
        <Route path="/about">
          <About />
        </Route>
        {/* Exact path, matches only exactly the root */}
        <Route exact path="/">
          <Home/>
        </Route>
        {/* Wildcard path; matches anything! */}
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </div>
  );
}