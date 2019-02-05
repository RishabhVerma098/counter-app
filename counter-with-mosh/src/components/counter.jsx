import React, { Component } from "react";
// instead of React.Fragment we can use div (see https://www.youtube.com/watch?v=Ke90Tje7VS0&t=1561s [35:35] )
// ctr+D to edit same <h1> and its ending tag
// in curly braces we can write any valid javascript code
// we use className in span instead of class (since class is a registered keyword
//two ways to add style are shown
class Counter extends Component {
  /*
  don't know about this ... something related to binding event handler
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  alternate solution = just use arrow functions
  */

  //other than functions
  state = {
    count: 1,
    tag: ["tag1", "tag2", "tag3"]
  }; //contain any data which the components need..(property)

  style = {
    fontSize: 20,
    fontWeight: "light"
  }; //use camel case notation , 10 os '10px'

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className={this.changecolor()}>
          {this.formatcount()}
        </span>
        <button
          style={{ fontSize: "20px" }}
          className="btn btn-secondary btn-m"
          //NOTE* = this.handleIncrement is reference to that fuuction where as this.handleIncrement() is calling that function
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        {/** 
        <ul>
          {this.state.tag.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        */}
      </React.Fragment>
    );
  }

  //functions
  formatcount = () => {
    //better
    const { count } = this.state;
    const x = <h6>Zero</h6>;
    return count === 0 ? x : count;
    //original (repition of this.state therefore use better version) 'object destruction'
    // return this.state.count === 0 ? 'Zero':this.state.count
  };
  changecolor = () => {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  };

  handleIncrement = () => {
    return console.log("hi", this.state.count);
  };
}

export default Counter;
