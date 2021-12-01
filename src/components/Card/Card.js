/* this is a component to show or create a single card to show in the card container named cards */

import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {
  const element = <FontAwesomeIcon icon={faCartArrowDown} />;
  // console.log(props);

  // destructuring
  const { name, level, gender, elixer, housing, picture } = props.card;
  return (
    <div>
      <div className="card-info">
        <img src={picture} alt="" />
        <div style={{ marginLeft: "10px", padding: "5px" }}>
          <h3>Name: {name}</h3>
          <h4>Elixer cost: {elixer}</h4>
          <h4>Housing Space: {housing}</h4>
          <p>Level: {level}</p>
          <p>Gender: {gender}</p>
          <button
            onClick={() => props.handelPocket(props.card)}
            className="addToPocket"
          >
            {element} Add to pocket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
