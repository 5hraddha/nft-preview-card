import React from 'react';

function CreatorAvatar({avatar}){
  return (
    <img className="creator-avatar" src={avatar} alt="User Avatar" />
  );
}

export default CreatorAvatar;