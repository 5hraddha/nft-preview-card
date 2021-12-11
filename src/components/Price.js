import React from 'react';
import PriceIcon from './../images/icon-ethereum.svg';

function Price(){
  return (
    <div className="price">
      <img className="price__icon" src={PriceIcon} alt="Ethereum Icon" />
      <p className="price__value">0.041 ETH</p>
    </div>
  );
}

export default Price;