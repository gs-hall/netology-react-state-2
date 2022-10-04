import React from "react";
import PropTypes from 'prop-types';

export default function ShopItem({name, price, color, img}) {
  return (
    <li className="list-li">
      <h1 className="list-name">{name}</h1>
      <h3 className="list-color">{color}</h3>
      <img src={img} alt="" className="list-img" />
      <h2 className="list-price">${price}</h2>
      <button className="list-button">ADD TO CART</button>
    </li>
  );
}

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}