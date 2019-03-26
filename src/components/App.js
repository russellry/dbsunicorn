import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Savingspage from "./../Savingspage";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/savings" component={Savingspage} />
        </div>
      </BrowserRouter>
    );
  }
}
