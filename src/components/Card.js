import React from 'react';
import CardBanner from './CardBanner';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';
import Price from './Price';
import RemainingTime from './RemainingTime';
import SectionDivider from './SectionDivider';
import Avatar from './Avatar';
import CreatorInfo from './CreatorInfo';

function Card(){
  return (
    <main className="card">
      <CardBanner />
      <CardTitle />
      <CardDescription />
      <div className="product-info">
        <Price />
        <RemainingTime />
      </div>
      <SectionDivider />
      <Avatar />
      <CreatorInfo />
    </main>
  );
}

export default Card;