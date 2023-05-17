/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import Countdown, { zeroPad } from 'react-countdown';
import React from 'react';
import PropTypes from 'prop-types';
import './countdown.css';

function Clock() {
  const random = () => Math.floor(Math.random() * 120000);

  return (
    <Countdown
      date={Date.now() + random(1200000)}
      intervalDelay={0}
      precision={3}
      renderer={(props) => {
        if (props.seconds === 0) {
          return null;
        }
        return (
          <div>
            <button>
              <div>
                {zeroPad(props.minutes)}: {zeroPad(props.seconds)}
              </div>
              See Item
            </button>
          </div>
        );
      }}
    />
  );
}

export default Clock;

Clock.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string,
};
