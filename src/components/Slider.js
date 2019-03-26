import React from "react";
import {Slider} from "react-semantic-ui-range"
import {Segment,Grid,Label,Input} from 'semantic-ui-react';


export default class Savingsbar extends React.Component {
  render() {
    return (
        <Grid.Column width={16}>
          <Segment>
            <h1>Discrete</h1>
            <p>
              <Slider discrete color="red" inverted={false} settings={settings}/>
            </p>
          </Segment>
        </Grid.Column>
        <Grid.Column width={16}>
          <Segment>
           <h1>Callback!</h1>
            <p>
              <Slider color="red" inverted={false}
                settings={{
                start: this.state.value1,
                min:0,
                max:10,
                step:1,
                onChange: (value) => {
                  this.setState({
                    value1:value
                  })
                }
              }}/>
            </p>
            <Label color="red">{this.state.value1}</Label>
          </Segment>
        </Grid.Column>
    );
  }
}
