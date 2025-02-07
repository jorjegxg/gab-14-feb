import { useState, useEffect } from "react";

const Cronometru = () => {
  // Data și ora de start
  const startDate = new Date("2025-01-27T17:40:00");

  const [timeElapsed, setTimeElapsed] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime(); // Calculăm diferența de timp

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed(`${days}z ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">Timpul de când ai acceptat să fii prietena mea ❤:</h1>
      <p className="text-3xl font-bold">{timeElapsed}</p>
    </div>
  );
};

export default Cronometru;
