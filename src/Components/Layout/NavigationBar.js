import React from "react";
import Logo from "./Logo";
import NonRegisteredUsers from "./NonRegisteredUsers";
import RegisteredUsers from "./RegisteredUsers";

import { connect } from "react-redux";

import { Component } from "react";

class NavigationBar extends Component {
  render() {
    console.log(this.props.fb);
    return (
      <>
        <nav className="nav-wrapper teal lighten-2">
          <div className="container">
            <Logo />
            <ul className="right">
              {this.props.fb.auth.isEmpty === false ? (
                <RegisteredUsers />
              ) : (
                <NonRegisteredUsers />
              )}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.auth.loginStatus,
    fb: state.firebase,
  };
};

export default connect(mapStateToProps)(NavigationBar);
