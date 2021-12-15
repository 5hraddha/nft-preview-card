import React          from "react";
import PropTypes      from 'prop-types';
import CreatorAvatar  from "./CreatorAvatar";
import CreatorInfo    from "./CreatorInfo";

/**
 * The **CreatorDetails** component representing the details of the creator of the NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function CreatorDetails({creator}) {
  return (
    <div className="creator-details">
      <CreatorAvatar avatar={creator.avatar} />
      <CreatorInfo creatorName={creator.name} />
    </div>
  );
}

CreatorDetails.propTypes = {
  /** An object that contains the details of the creator of the NFT */
  creator : PropTypes.object.isRequired
}

export default CreatorDetails;