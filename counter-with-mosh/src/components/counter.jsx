import React, { Component } from "react";
// instead of React.Fragment we can use div (see https://www.youtube.com/watch?v=Ke90Tje7VS0&t=1561s [35:35] )
// ctr+D to edit same <h1> and its ending tag
// in curly braces we can write any valid javascript code
// we use className in span instead of class (since class is a registered keyword)
class Counter extends Component {
  state = {
    count: 0
  }; //contain any data which the components need..(property)

  style = {
    fontSize: 10,
    fontWeight: "light"
  }; //use camel case notation

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className="badge badge-primary m-2">
          {this.formatcount()}
        </span>
        <button className="btn btn-secondary btn-m">Increment</button>
      </React.Fragment>
    );
  }

  formatcount() {
    //better
    const { count } = this.state;
    const x = <h6>Zero</h6>;
    return count === 0 ? x : count;
    //original (repition of this.state therefore use better version) 'object destruction'
    // return this.state.count === 0 ? 'Zero':this.state.count
  }
}

export default Counter;
