import React              from "react";
import Price              from './Price';
import RemainingTime      from './RemainingTime';

function ProductInfo({product}){
  return (
    <div className="product-info">
      <Price priceInEth={product.priceInEth} />
      <RemainingTime noOfDays={product.noOfDaysRemaining} />
    </div>
  );
}

export default ProductInfo;