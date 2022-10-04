import React from "react";
import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";

export default function ListView({items}) {
  const itemElements = items.map((item, i) => (
    <ShopItem name={item.name} price={item.price} color={item.color} img={item.img} key={i} />
  ));
  return (
    <ul className="list-ul">
      {itemElements}
    </ul>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}