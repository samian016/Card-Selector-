// this is the unit of selected card to show
import "./MiniCard.css";

import React from "react";

const MiniCard = (props) => {
  // console.log(props)
  const { name, picture } = props.card;
  return (
    <div className="mini-info">
      <img src={picture} alt="" />
      <p>
        <small>{name}</small>{" "}
      </p>
    </div>
  );
};

export default MiniCard;
