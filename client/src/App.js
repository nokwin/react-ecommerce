import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { checkUserSession } from "./redux/user/user.actions";
import CurrentUserContext from "./context/current-user/current-user.context";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  checkUserSession
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
