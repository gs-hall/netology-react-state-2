import React from "react";
import PropTypes from 'prop-types';

export default function ShopCard({name, price, color, img}) {
  return (
    <li className="card-li">
      <h1 className="card-name">{name}</h1>
      <h3 className="card-color">{color}</h3>
      <img src={img} alt="" className="card-img" />
      <h2 className="card-price">${price}</h2>
      <button className="card-button">ADD TO CART</button>
    </li>
  );
}

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}