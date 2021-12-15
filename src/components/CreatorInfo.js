import React          from 'react';
import PropTypes      from 'prop-types';

/**
 * The **CreatorInfo** component representing the name of the creator of the NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function CreatorInfo({creatorName}){
  return (
    <p className="creator-info">Creation of <span className="creator-info__name">{creatorName}</span></p>
  );
}

CreatorInfo.propTypes = {
  /** A string that is the name of the creator of the NFT */
  creatorName : PropTypes.string.isRequired
}

export default CreatorInfo;