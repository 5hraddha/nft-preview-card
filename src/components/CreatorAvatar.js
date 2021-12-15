import React          from 'react';
import PropTypes      from 'prop-types';

/**
 * The **CreatorAvatar** component representing the avatar of the creator of the NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function CreatorAvatar({avatar}){
  return (
    <img className="creator-avatar" src={avatar} alt="User Avatar" />
  );
}

CreatorAvatar.propTypes = {
  /** A string that is the URL of the avatar of the creator of the NFT */
  avatar : PropTypes.string.isRequired
}

export default CreatorAvatar;