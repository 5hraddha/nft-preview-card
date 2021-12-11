import React from 'react';
import CardBannerImg from './../images/image-equilibrium.jpg';

function CardBanner() {
  return (
    <div className="card-banner">
      <img className="card-banner__img" src={CardBannerImg} alt="Card banner" />
    </div>
  );
}

export default CardBanner;