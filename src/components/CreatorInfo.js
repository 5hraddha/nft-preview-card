import React from 'react';

function CreatorInfo({creatorName}){
  return (
    <p className="creator-info">Creation of <span className="creator-info__name">{creatorName}</span></p>
  );
}

export default CreatorInfo;