import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "../pages/Homepage"
import Savingspage from "../pages/Savingspage";
import HomepageCD from './../pages/Homepage.CD';
import HomepageSpending from './../pages/Homepage.Spending';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/savings" component={Savingspage} />
          <Route path="/cd" component={HomepageCD} />
          <Route path="/spending" component={HomepageSpending} />
        </div>
      </BrowserRouter>
    );
  }
}
