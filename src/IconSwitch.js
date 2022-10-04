import React from "react";
import PropTypes from 'prop-types';
import "./product.css";

export default function IconSwitch({icon, onSwitch}) {
  return (
    <div className="header">
      <i className="material-icons pointer switch" onClick={onSwitch}>{icon}</i>
    </div>
    );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}