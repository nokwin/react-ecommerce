import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Shop } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { AuthPage } from "./pages/auth/auth.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };

  authStateListener = null;

  componentDidMount() {
    this.authStateListener = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.authStateListener();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
