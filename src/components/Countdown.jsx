import Countdown from "react-countdown";

const Clock = () => {
  return (
    <Countdown
      date={Date.now() + 60000}
      intervalDelay={0}
      precision={3}
      zeroPadTime={2}
      renderer={(props) => <div>{props.minutes}:{props.seconds}</div>}
    />
  );
};

export default Clock;
