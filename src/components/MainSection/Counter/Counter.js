import { useState, useRef, useEffect } from "react";
import "./counter.css";
const Counter = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("Jun 29, 2023 18:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (+distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="wrapCounter">
      <div className="timerBox">
        <span>{timerDays}</span> <span> дней</span>
      </div>
      <div className="timerBox">
        <span>{timerHours}</span> <span> часов</span>
      </div>
      <div className="timerBox">
        <span>{timerMinutes}</span> <span> минут</span>
      </div>
      <div className="timerBox">
        <span>{timerSeconds}</span> <span> секунд</span>
      </div>
    </div>
  );
};
export default Counter;
