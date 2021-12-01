// this is the board where you find the cards to select. and your pocket to store selected cards
import React, { useState } from "react";
import CardInHand from "../Card In Hand/CardInHand";
import Cards from "../Cards/Cards";
import "./CardTable.css";
const CardTable = () => {
  const [pocket, setPocket] = useState([]);
  const handelPocket = (newCard) => {
    const available = pocket.find((card) => card.key === newCard.key);
    if (!available) {
      const newpocket = [...pocket, newCard];
      setPocket(newpocket);
    } else {
      // console.log(newCard.name,"added previously");
    }
  };
  // console.log(pocket,'s');
  return (
    <div className="table">
      {/* cards in the cards component */}
      <Cards handelPocket={handelPocket}></Cards>
      {/* Card in hand is the pocket or selected card container  */}
      <CardInHand pocket={pocket}></CardInHand>
    </div>
  );
};

export default CardTable;
