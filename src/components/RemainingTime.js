import React          from 'react';
import PropTypes      from 'prop-types';
import TimeIcon       from './../images/icon-clock.svg';

/**
 * The **RemainingTime** component representing the remaining time to buy the NFT.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function RemainingTime({noOfDays}){
  return (
    <div className="remaining-time">
      <img className="remaining-time__icon" src={TimeIcon} alt="Remaining Time" />
      <p className="remaining-time__value">{noOfDays} days left</p>
    </div>
  );
}

RemainingTime.propTypes = {
  /** A string that is the remaining number of days to buy the NFT */
  noOfDays : PropTypes.string.isRequired
}

export default RemainingTime;