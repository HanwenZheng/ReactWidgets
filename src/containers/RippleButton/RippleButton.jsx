import React, { Component } from "react";
import styles from "./RippleButton.module.scss";

class RippleButton extends Component {
  state = {
    ripples: null,
  };

  handleClick = (e) => {
    e.preventDefault();
    if (this.props.onClick) this.props.onClick();
    if (!this.state.ripples) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      let ripple = document.createElement("span");
      ripple.style.left = x / 16 + "rem";
      ripple.style.top = y / 16 + "rem";
      this.setState({ ripples: ripple });
      setTimeout(
        () =>
          this.setState({
            ripples: null,
          }),
        800
      );
    }
  };

  render() {
    return (
      <div
        className={[
          styles.RippleButton,
          this.props.variant === "blue" ? styles.blue : "",
          this.props.variant === "purple" ? styles.purple : "",
        ].join(" ")}
      >
        <a href="#" onClick={this.handleClick}>
          {this.props.children}
          {
            <span
              key={Math.random()}
              ref={(node) => {
                node &&
                  this.state.ripples &&
                  node.appendChild(this.state.ripples);
              }}
            />
          }
        </a>
      </div>
    );
  }
}

export default RippleButton;
