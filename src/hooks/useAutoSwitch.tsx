import { useEffect, useState } from "react";

// Définition des types pour les paramètres
const useAutoSwitch = (length: number, intervalTime: number): number => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < length - 1 ? prev + 1 : 0));
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [length, intervalTime]);

  return currentIndex;
};

export default useAutoSwitch;