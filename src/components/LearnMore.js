import React from "react";

export default class LearnMore extends React.Component {
  render() {
    return (
      <div class="ui animated button" tabindex="0">
        <div class="visible content">Get started!</div>
        <div class="hidden content">
          <i class="right arrow icon" />
        </div>
      </div>
    );
  }
}
