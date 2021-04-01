import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import classes from "./RotatingNav.module.scss";
import rotate from "../../helper/Effects/rotate.module.scss";
import fadeIn from "../../helper/Effects/fadeOff.module.scss";
import fadeOff from "../../helper/Effects/fadeOff.module.scss";

const RotatingNav = (props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={classes.RotatingNav}>
      <div className={classes.menu}>
        <div>
          <Button
            variant="primary"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu && <FontAwesomeIcon icon={faBars} />}
            {!menu && <FontAwesomeIcon icon={faTimes} />}
          </Button>
        </div>
      </div>
      <CSSTransition in={menu} timeout={1000} classNames={rotate}>
        <div className={classes.content}>{props.children}</div>
      </CSSTransition>
    </div>
  );
};

export default RotatingNav;
