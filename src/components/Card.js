import React from 'react';
import CardBanner from './CardBanner';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';
import Price from './Price';
import Time from './Time';
import SectionDivider from './SectionDivider';
import Avatar from './Avatar';
import CreatorInfo from './CreatorInfo';

function Card(){
  return (
    <div className="card">
      <CardBanner />
      <CardTitle />
      <CardDescription />
      <Price />
      <Time />
      <SectionDivider />
      <Avatar />
      <CreatorInfo />
    </div>
  );
}

export default Card;