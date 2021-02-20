import React, { Component } from "react";
import classes from "./ProgressSteps.module.scss";
import { Button } from "reactstrap";

class ProgressSteps extends Component {
  state = {
    active: 1,
  };

  steps = 4;

  prevClicked = () => {
    if (this.state.active !== 0) {
      this.setState({ active: this.state.active - 1 });
    }
  };

  nextClicked = () => {
    if (this.state.active !== this.steps - 1) {
      this.setState({ active: this.state.active + 1 });
    }
  };

  render() {
    const styleWidth = `${((this.state.active / (this.steps - 1)) * 48).toFixed(
      1
    )}vw`;

    const steps = Array(this.steps)
      .fill("")
      .map((step, index) => {
        const addActive = this.state.active >= index ? classes.active : null;

        return (
          <div key={index} className={`${classes.circle} ${addActive}`}>
            {index + 1}
          </div>
        );
      });

    console.log(steps);

    return (
      <div className={classes.ProgressSteps}>
        <div className={classes.stepsWrapper}>
          {steps}
          <div className={classes.line} />
          <div className={classes.line2} style={{ width: styleWidth }} />
        </div>
        <div className={classes.btnWrapper}>
          <Button
            disabled={this.state.active === 0}
            color="primary"
            onClick={this.prevClicked}
          >
            Prev
          </Button>
          <Button
            disabled={this.state.active === this.steps - 1}
            color="danger"
            onClick={this.nextClicked}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default ProgressSteps;
