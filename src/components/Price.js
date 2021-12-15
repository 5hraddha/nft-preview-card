import React          from 'react';
import PropTypes      from 'prop-types';
import PriceIcon      from './../images/icon-ethereum.svg';

/**
 * The **Price** component representing the price of the NFT (in Ethereum).
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function Price({priceInEth}){
  return (
    <div className="price">
      <img className="price__icon" src={PriceIcon} alt="Ethereum Icon" />
      <p className="price__value">{priceInEth} ETH</p>
    </div>
  );
}

Price.propTypes = {
  /** A string that is the price of the NFT (in Ethereum) */
  priceInEth : PropTypes.string.isRequired
}

export default Price;