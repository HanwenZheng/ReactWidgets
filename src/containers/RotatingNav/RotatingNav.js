import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faDice,
  faHeadphones,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./RotatingNav.module.scss";
import { rotate, fadeIn, fadeOff, slide } from "../../helper/Effects/index";

const RotatingNav = (props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={classes.RotatingNav}>
      <div className={classes.menu}>
        <Button
          variant="primary"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <CSSTransition in={menu} classNames={fadeOff} timeout={1000}>
            <div>{!menu && <FontAwesomeIcon icon={faBars} />}</div>
          </CSSTransition>
          <CSSTransition in={!menu} classNames={fadeOff} timeout={1000}>
            <div>{menu && <FontAwesomeIcon icon={faTimes} />}</div>
          </CSSTransition>
        </Button>
      </div>
      <CSSTransition in={menu} classNames={slide} timeout={1000}>
        <div className={classes.nav}>
          <Button variant="primary">
            <FontAwesomeIcon icon={faDice} />
          </Button>
          <Button variant="primary">
            <FontAwesomeIcon icon={faHeadphones} />
          </Button>
          <Button variant="primary">
            <FontAwesomeIcon icon={faRecordVinyl} />
          </Button>
        </div>
      </CSSTransition>
      <CSSTransition in={menu} timeout={1000} classNames={rotate}>
        <div className={classes.content}>{props.children}</div>
      </CSSTransition>
    </div>
  );
};

export default RotatingNav;
