import React              from 'react';
import CardBanner         from './CardBanner';
import CardTitle          from './CardTitle';
import CardDescription    from './CardDescription';
import ProductInfo        from './ProductInfo';
import SectionDivider     from './SectionDivider';
import CreatorDetails     from './CreatorDetails';
import CardBannerImg      from './../images/image-equilibrium.jpg';
import Avatar             from "./../images/image-avatar.png";

function Card(){
  const creator = {
    name: 'Jules Wyvern',
    avatar: Avatar
  };

  const product = {
    priceInEth: '0.041',
    noOfDaysRemaining: '3'
  }

  return (
    <main className="card">
      <CardBanner cardBanner={CardBannerImg} />
      <CardTitle cardTitle="Equilibrium #3429" />
      <CardDescription cardDescription="Our Equilibrium collection promotes balance and calm." />
      <ProductInfo product={product} />
      <SectionDivider />
      <CreatorDetails creator={creator} />
    </main>
  );
}

export default Card;