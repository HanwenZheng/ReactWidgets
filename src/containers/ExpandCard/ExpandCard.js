import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import classes from "./ExpandCard.module.css";
import Card from "./Card/Card";
import randomKey from "../../helper/randomKey";

const ExpandCard = (props) => {
  const numPics = 4;

  const [randomPicUrls, setRandomPicUrls] = useState([]);

  const unsplash = createApi({
    accessKey: "KdJPbovCIOzHDL0SxuOI-gbzuAxnqbDOEN334-qpgWk",
  });

  useEffect(() => {
    if (randomPicUrls.length === 0) {
      unsplash.photos
        .getRandom({ count: numPics, query: "landscape" })
        .then((result) => {
          if (result.errors) {
            console.log("error occurred: ", result.errors[0]);
          } else {
            setRandomPicUrls(result.response.map((item) => item.urls.regular));
          }
        });
    }
  });

  let cards =
    randomPicUrls.length === 0
      ? ""
      : randomPicUrls.map((url, index) => {
          return <Card key={randomKey("image")} url={url} />;
        });

  return (
    <div>
      <div className={classes.padTop} />
      <div className={classes.ExpandCard}>{cards}</div>
    </div>
  );
};

export default ExpandCard;
