import { useState, useEffect } from "react";

const useTimer = (duration: number, isActive: boolean = true) => {
  const [counter, setCounter] = useState(duration);

  useEffect(() => {
    let interval: any;

    if (isActive) {
      interval = setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        } else {
          return () => clearInterval(interval);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, counter]);

  return counter;
};

export default useTimer;
