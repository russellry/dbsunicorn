import React from "react";
import Stackchart from './Stackchart'
import Barchart from './Barchart';
import {Link} from 'react-router-dom'

const GraphList = () => {

  return (
    <div class="ui grid">
      <div class="twelve wide stretched column">
        <div class="ui segment">
          <Stackchart/>
        </div>
      </div>
      <div class="four wide column">
        <div class="ui vertical fluid right tabular menu">
          <Link to ="/cd" class="item">Spending(Credit vs Debit)</Link>
          <Link to ="/spending" class="active item">Spending (Time Of Day)</Link>
        </div>
      </div>
    </div>
  );
};

export default GraphList;
