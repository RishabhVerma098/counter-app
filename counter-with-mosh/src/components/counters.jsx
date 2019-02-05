import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(count => (
          <Counter key={count.id} value={count.value} />
          //these key,value,selected(added before) are the properties that we define for counter.jsx (this.props)
          //key are special type of props they are not accesable
        ))}
      </div>
    );
  }
}

export default Counters;
