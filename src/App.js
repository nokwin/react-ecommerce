import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";

const TemporaryComp = props => <h1>{props.match.params.category}</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:category" component={TemporaryComp} />
      </Switch>
    </div>
  );
}

export default App;
