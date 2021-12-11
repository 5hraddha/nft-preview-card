import React from 'react';
import TimeIcon from './../images/icon-clock.svg';

function RemainingTime(){
  return (
    <div className="remaining-time">
      <img className="remaining-time__icon" src={TimeIcon} alt="Remaining Time" />
      <p className="remaining-time__value">3 days left</p>
    </div>
  );
}

export default RemainingTime;