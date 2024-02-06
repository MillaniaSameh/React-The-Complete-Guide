import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  render() {
    return <li className="user">{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className="user">{this.props.name}</li>;
// };

export default User;
