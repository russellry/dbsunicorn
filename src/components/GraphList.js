import React from "react";
import Barchart from "./Barchart";
import { Link } from "react-router-dom";
import LearnMore from "./LearnMore";
import Progress from "./Progress";

const GraphList = () => {
  return (
    <div class="ui grid">
      <div class="twelve wide stretched column">
        <div class="ui segment">
          <Barchart />
        </div>
      </div>
      <div class="four wide column">
        <div class="ui vertical fluid right tabular menu">
          <Link to="/cd" class="active item">
            Spending(Credit vs Debit)
          </Link>
          <Link to="/spending" class="item">
            Spending (Time Of Day)
          </Link>
        </div>
        <LearnMore />
      </div>
      <Progress />
    </div>
  );
};

export default GraphList;
