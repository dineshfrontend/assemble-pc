import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import  BuildPC  from "../Pages/BuildPC";
import MyCart from "../Pages/MyCart";

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/build-my-pc" component={BuildPC} exact={true} />
        <Route path="/my-cart" component={MyCart} />
        <Redirect from="/" to="build-my-pc" />
      </Switch>
      </BrowserRouter>
      );
  }
