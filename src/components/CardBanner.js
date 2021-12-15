import React          from 'react';
import PropTypes      from 'prop-types';

/**
 * The **CardBanner** component representing the banner image of the card - NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function CardBanner({cardBanner}) {
  return (
    <div className="card-banner">
      <img className="card-banner__img" src={cardBanner} alt="Card banner" />
    </div>
  );
}

CardBanner.propTypes = {
  /** A string that is the URL of the NFT - card's banner image */
  cardBanner : PropTypes.string.isRequired
}

export default CardBanner;