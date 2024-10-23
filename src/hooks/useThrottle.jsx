import { useEffect, useRef, useState } from "react";

export const useThrottle = (value, limit) => {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Date.now() - lastExecuted.current >= limit) {
        lastExecuted.current = Date.now();;
        setThrottleValue(value);
      }
    }, limit);

    return () => {
        setTimeout(timer);
    };
  }, [value, limit]);

  return throttleValue;
};
