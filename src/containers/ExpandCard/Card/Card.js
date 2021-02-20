import React, { useState, useEffect } from "react";
import axios from "axios";
import StyledContentLoader from "styled-content-loader";
import classes from "./Card.module.scss";

const Card = React.memo((props) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message === "") {
      setTimeout(() => {
        axios
          .get(
            `https://jsonplaceholder.typicode.com/todos/${Math.floor(
              Math.random() * 200 + 1
            )}`
          )
          .then((response) => {
            setMessage(
              response.data.title.split(" ").reduce((sum, val, index) => {
                return index < 3 ? sum + " " + val : sum;
              })
            );
          });
      }, 200);
    }
  });

  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const classesToRender = [classes.Card, ""];

  return (
    <div
      className={classesToRender.join(" ")}
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <StyledContentLoader
        isLoading={message === ""}
        backgroundColor={randomColor}
      >
        <span>{message === "" ? "Loading" : message}</span>
      </StyledContentLoader>
    </div>
  );
});

export default Card;
