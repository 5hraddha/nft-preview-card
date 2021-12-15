import React from 'react';

function CardBanner({cardBanner}) {
  return (
    <div className="card-banner">
      <img className="card-banner__img" src={cardBanner} alt="Card banner" />
    </div>
  );
}

export default CardBanner;