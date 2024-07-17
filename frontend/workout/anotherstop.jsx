import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds + 1 === 60) {
            setMinutes((prevMinutes) => {
              if (prevMinutes + 1 === 60) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const pad = (number) => {
    return number < 10 ? '0' + number : number;
  };

  return (
    <div className="stopwatch">
      <div className="display">{`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`}</div>
      <button className="control start" onClick={startTimer}>Start</button>
      <button className="control stop" onClick={stopTimer}>Stop</button>
      <button className="control reset" onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
