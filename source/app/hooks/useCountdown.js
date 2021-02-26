import { useEffect, useState } from 'react';

const useCountdown = (deadline) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timeLeftUpdate = setInterval(() => {
      const total = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      const days = Math.floor(total / 1000 / 60 / 60 / 24);

      setTimeLeft({ ...timeLeft, seconds, minutes, hours, days });
    }, 1000);

    return () => {
      clearInterval(timeLeftUpdate);
    };
  }, []);

  return timeLeft;
};

export default useCountdown;
