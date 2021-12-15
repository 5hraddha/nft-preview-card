import React          from 'react';
import PropTypes      from 'prop-types';

/**
 * The **CardDescription** component representing the description of the NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function CardDescription({cardDescription}) {
  return (
    <p className="card-description">{cardDescription}</p>
  );
}

CardDescription.propTypes = {
  /** A string that is the description of the NFT */
  cardDescription : PropTypes.string.isRequired
}

export default CardDescription;