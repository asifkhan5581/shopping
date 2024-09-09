import React, { useState, useEffect } from "react";
import module from "./clock.module.css";

function Clock() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date here

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={module.clock}>
      <h1 className="text-white fs-6 mb-2">Limited Offer</h1>
      <h1 className="text-white fs-5 mb-2">Guarantee of Quality</h1>

      <div className={module.clock_wrapper}>
        <div className={module.clock__inner}>
          <h1 className="text-white fs-1">{timeLeft.days}</h1>
          <h5 className="text-white fs-5">Days</h5>
        </div>
        <div>
          <span className="text-white fs-3">:</span>
        </div>
        <div className={module.clock__inner}>
          <h1 className="text-white fs-1">{timeLeft.hours}</h1>
          <h5 className="text-white fs-5">Hours</h5>
        </div>
        <div>
          <span className="text-white fs-3">:</span>
        </div>
        <div className={module.clock__inner}>
          <h1 className="text-white fs-1">{timeLeft.minutes}</h1>
          <h5 className="text-white fs-5">Minutes</h5>
        </div>
        <div>
          <span className="text-white fs-3">:</span>
        </div>
        <div className={module.clock__inner}>
          <h1 className="text-white fs-1">{timeLeft.seconds}</h1>
          <h5 className="text-white fs-5">Seconds</h5>
        </div>
      </div>
    </div>
  );
}

export default Clock;
