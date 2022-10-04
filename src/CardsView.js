import React from "react";
import PropTypes from 'prop-types';
import ShopCard from "./ShopCard";

export default function CardsView({cards}) {
  const cardElements = cards.map((card, i) => (
    <ShopCard name={card.name} price={card.price} color={card.color} img={card.img} key={i} />
  ));
  return (
    <ul className="card-ul">
      {cardElements}
    </ul>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}