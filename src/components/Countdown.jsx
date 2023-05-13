import Countdown from "react-countdown";
import PropTypes from "prop-types";
import './countdown.css'

const Clock = () => {


const random = () => Math.floor(Math.random() * 120000);


  return (
    <Countdown
      date={Date.now() + random(1200000)}
      intervalDelay={0}
      precision={3}
      renderer={(props) => (
        <div className="test">
            <button><div>{props.minutes}: {props.seconds}</div>See Item</button>
          
        </div>
      )}
    />
  );
};

export default Clock;

Clock.propTypes = {
    minutes: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired
  };