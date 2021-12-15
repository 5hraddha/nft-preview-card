import React from "react";
import CreatorAvatar from "./CreatorAvatar";
import CreatorInfo from "./CreatorInfo";

function CreatorDetails({creator}) {
  return (
    <div className="creator-details">
      <CreatorAvatar avatar={creator.avatar} />
      <CreatorInfo creatorName={creator.name} />
    </div>
  );
}

export default CreatorDetails;