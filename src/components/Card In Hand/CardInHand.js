// this is to contains the selected cards and selected card number and cost. that means selected cards will shown here
// i named this to pocket.
import React from "react";
import MiniCard from "../Mini card/MiniCard";
import "./CardInHand.css";
const CardInHand = (props) => {
  //   console.log(props.pocket);
  const { pocket } = props;

  // console.log(pocket);

  const reducer = (previous, current) => previous + current.elixer;

  const total = pocket.reduce(reducer, 0);
  return (
    <div className="pocket">
      <h3>Cards In Pocket: {props.pocket.length}</h3>
      <h4>Total Cost: {total}</h4>
      <div className="pocket-grid">
        {pocket.map((card) => (
          <MiniCard card={card} key={card.key}></MiniCard>
        ))}
      </div>
    </div>
  );
};

export default CardInHand;
