import React          from 'react';
import PropTypes      from 'prop-types';

/**
 * The **CardTitle** component representing the title of the NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function CardTitle({cardTitle}) {
  return (
    <h1 className="card-title">{cardTitle}</h1>
  );
}

CardTitle.propTypes = {
  /** A string that is the title of the NFT */
  cardTitle : PropTypes.string.isRequired
}


export default CardTitle;