import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import "./../styles/App.css";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Forms Application</h1>
        <nav>
          <Link id="form-link" to="/">
            Section 1
          </Link>{" | "}
          <Link id="form-ref-link" to="/form-ref">
            Section 2
          </Link>{" | "}
          <Link id="form-state-link" to="/form-state">
            Section 3
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/form-ref" component={FormRef} />
          <Route path="/form-state" component={FormState} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
