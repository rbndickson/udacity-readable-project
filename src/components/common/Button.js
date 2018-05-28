import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  classes() {
    return this.props.mods
      ? this.props.mods.reduce((acc, e) => acc + " Button--" + e, "Button")
      : "Button";
  }

  render() {
    return (
      <button className={this.classes()} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
