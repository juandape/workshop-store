import Countdown from "react-countdown";

const Clock = () => {


const random = () => Math.floor(Math.random()* 120000);


  return (
    <Countdown
      date={Date.now() + random(1200000)}
      intervalDelay={0}
      precision={3}
      renderer={(props) => (
        <div>
          {props.minutes}: {props.seconds}
        </div>
      )}
    />
  );
};

export default Clock;
