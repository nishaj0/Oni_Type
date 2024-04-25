import { useCallback, useEffect, useRef, useState } from 'react';

function useCountdown(initialValue: number, interval = 1000) {
   const intervalRef = useRef<number | null>(null);
   const [countdown, setCountdown] = useState<number>(initialValue);

   const startCountdown = useCallback(() => {
      // ? If countdown is already running, return
      if (intervalRef.current) return;

      intervalRef.current = window.setInterval(
         () =>
            setCountdown((prev) => {
               if (prev > 0) return prev - 1;

               // ? If countdown reaches 0, clear interval
               if (prev === 0) window.clearInterval(intervalRef.current!);
               return prev;
            }),
         interval,
      );
   }, [interval]);

   const resetCountdown = useCallback(() => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCountdown(initialValue);
   }, [initialValue]);

   // ? Clear interval on unmount
   useEffect(() => {
      return () => {
         if (intervalRef.current) window.clearInterval(intervalRef.current);
      };
   }, []);

   return { startCountdown, resetCountdown, countdown };
}

export default useCountdown;
