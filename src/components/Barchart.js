import React from "react";
import { Chart, Bars } from "rumble-charts";

class Piechart extends React.Component {
  render() {
    const series = [
      {
        data: [7]
      },

      {
        data: [13]
      }
    ];
    return (
      <div>
        <Chart position="middle" width={600} height={250} series={series} minY={0}>
          <Bars
            colors="category10"
            innerPadding="0.5%"
            groupPadding="3%"
          />
        </Chart>
      </div>
    );
  }
}

export default Piechart;
