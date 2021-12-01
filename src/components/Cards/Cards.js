/* here data are loaded from data Set,  
and this props get a use satate to share data to parent component. 
because pocket or card calculation is in the parent component.
 or useState of  pocket is in the parent component and datga was loaded here.
  so to sent data to parent component props get a functiion to bare selected cards to parent

  this functuion also so sent to child component to get selected card information
  */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";
const Cards = (props) => {
  // console.log(props);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(`./troops.JSON`)
      .then((response) => response.json())
      .then((cards) => setCards(cards));
  }, []);
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          handelPocket={
            props.handelPocket
          } /* this is the functiuon to bare and get selected card info */
          key={card.key}
          card={card}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
<h1>card here dynamic</h1>;
