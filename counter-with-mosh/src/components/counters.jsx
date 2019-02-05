import React, { Component } from "react";
import Counter from "./counter";
//1:24:41 - 1:27:31 to learn about children props
/**
what is the difference between
props and state , props includes
data that we give to a component whereas
state includes data that is local or
private to that component so other
components cannot access that state it's
completely internal to that component
 */

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  onHandleDelete = counterId => {
    //console.log("hi!!!", counterId);
    const count = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: count });
    console.log("deleted", counterId);
  };

  render() {
    return (
      <div>
        {this.state.counters.map(count => (
          <Counter
            key={count.id}
            id={count.id}
            value={count.value}
            onDelete={this.onHandleDelete}
            //instead of separately writing key and id we should do..1:42:52  https://www.youtube.com/watch?v=Ke90Tje7VS0&t=1561s
          />
          //these key,value,selected(added before) are the properties that we define for counter.jsx (this.props)
          //key are special type of props they are not accesable
        ))}
      </div>
    );
  }
}

export default Counters;
