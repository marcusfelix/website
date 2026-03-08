import { useEffect, useRef, useState } from "preact/hooks";

export default function Counter({ count }: { count: number }) {
  const [display, setDisplay] = useState(count);
  const prev = useRef(count);

  useEffect(() => {
    const start = prev.current;
    const end = count;
    if (start === end) return;

    const duration = 1000; // milliseconds
    const steps = Math.abs(end - start);
    const interval = duration / Math.max(steps, 1);
    let current = start;

    const updater = setInterval(() => {
      current += end > start ? 1 : -1;
      setDisplay(current);
      if (current === end) {
        clearInterval(updater);
      }
    }, interval);

    prev.current = end;

    return () => clearInterval(updater);
  }, [count]);

  return <span className="counter">{display}</span>;
}