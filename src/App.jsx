import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import About from "./pages/About";
import Users from "./pages/Users";

export default function App() {

  return (
    <div>
      <h1>App!!!!</h1>
      <Navigation />

      <Switch>
        <Route path="/userlisting/users/list" component={Users} />
        {/* Regular path; matches /contact and /contact/us for example */}
        <Route path="/contact" component={Contact} />
        {/* Regular path */}
        <Route path="/about" component={About} />
        {/* Exact path, matches only exactly the root */}
        <Route exact path="/" component={Home} />
        {/* Wildcard path; matches anything! */}
        <Route path="*">
          <p>IS THIS SHOWING????</p>
          <Redirect to="/about" />
        </Route>
      </Switch>
    </div>
  );
}
