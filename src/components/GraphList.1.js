import React from "react";
import Stackchart from "./Stackchart";
import { Link } from "react-router-dom";
import LearnMore from "./LearnMore";
import Progress from './Progress'

const GraphList = () => {
  return (
    <div class="ui grid">
      <div class="twelve wide stretched column">
        <div class="ui segment"><Stackchart/></div>
      </div>
      <div class="four wide column">
        <div class="ui vertical fluid right tabular menu">
          <Link to="/cd" class="item">
            Spending(Credit vs Debit)
          </Link>
          <Link to="/spending" class="active item">
            Spending (Time Of Day)
          </Link>
        </div>
        <Link to ="/savings"> <LearnMore /></Link>
      </div>
      <Progress />
    </div>
  );
};

export default GraphList;
