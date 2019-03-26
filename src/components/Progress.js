import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default class Progress extends React.Component {
  render() {
    return (
      <Timeline lineColor={"#ddd"}>
        <TimelineItem key="001" dateText="Step 1" style={{ color: "#e86971" }}>
          <h3>Set a goal for your monthly savings</h3>
          <p>
            Ideally, the amount that you must save depends on your spending
            habits. Take a look at what others your age group are spending using
            our online charts! Then, see where you can cut down on your
            spendings or talk to our one-to-one advisors with DBS's phone
            banking service.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="Step 2"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
          }}
        >
          <h3 style={{ color: "#61b8ff" }}>Have a minimum account balance </h3>
          <p>
            It is recommended that you have at least 3 months worth of
            expenditure as savings to tide you through emergencies.
          </p>
        </TimelineItem>
        <TimelineItem key="001" dateText="Step 3" style={{ color: "#e86971" }}>
          
        
          <h3>Get started on your invesment journey!</h3>
          <p>
            Set up your DBS Vickers account under "Invest" or visit any DBS ATM
            or service branch. Earn exciting rewards on improving your Debit
            Score(TM) with the bank. It is calculated based on how wisely you
            invest and how unlikely you are to spend recklessly. SAVE MORE, GET
            MORE!
          </p>
        </TimelineItem>

      </Timeline>
    );
  }
}
