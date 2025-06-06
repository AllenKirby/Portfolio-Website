import { useState, useEffect } from 'react'


const useDelayedValue = (percentage: number, delay: number): number => {
    const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(percentage);
    }, delay);

    return () => clearTimeout(timeout);
  }, [percentage, delay]);

  return value;
}

export default useDelayedValue
