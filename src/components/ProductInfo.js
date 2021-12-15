import React              from "react";
import PropTypes          from 'prop-types';
import Price              from './Price';
import RemainingTime      from './RemainingTime';

/**
 * The **ProductInfo** component representing the information of the NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function ProductInfo({product}){
  return (
    <div className="product-info">
      <Price priceInEth={product.priceInEth} />
      <RemainingTime noOfDays={product.noOfDaysRemaining} />
    </div>
  );
}

ProductInfo.propTypes = {
  /** An object that contains the information of the NFT */
  product : PropTypes.object.isRequired
}

export default ProductInfo;