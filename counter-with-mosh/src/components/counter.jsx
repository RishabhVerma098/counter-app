import React, { Component } from "react";
// instead of React.Fragment we can use div (see https://www.youtube.com/watch?v=Ke90Tje7VS0&t=1561s [35:35] )
// ctr+D to edit same <h1> and its ending tag
// in curly braces we can write any valid javascript code
// we use className in span instead of class (since class is a registered keyword
//two ways to add style are shown
//1:12:59 https://www.youtube.com/watch?v=Ke90Tje7VS0&t=1561s passing event agument for handleIncrement function
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
    count: this.props.value
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

        <button
          style={{ fontSize: "20px" }}
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
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
    this.setState({ count: this.state.count + 1 }); //++ won't work
  };
}

export default Counter;
