import React from "react";

export default class Savingsbar extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div class="ui basic demo progress">
          <div class="bar">
            <div class="progress" />
          </div>
          <div class="label">$950 to go!</div>
        </div>
      </div>   
    );
  }
}
