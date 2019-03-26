import React from "react";
import {Link} from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <div class="ui two item menu">
        <Link className="item" to ="/"> Homepage </Link>
        <Link className="item" to = "/savings">Savings</Link>
      </div>
    );
  }
}

export default Header;
