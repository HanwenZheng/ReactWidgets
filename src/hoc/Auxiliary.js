import React from "react";

const Aux = (props) => (
  <div className={props.className} style={props.style}>
    {props.children}
  </div>
);

export default Aux;
