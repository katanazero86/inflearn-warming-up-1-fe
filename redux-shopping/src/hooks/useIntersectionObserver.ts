import { useEffect, useRef } from 'react';

export default function useIntersectionObserver(
  callback: () => void,
  options = { rootElement: null, rootMargin: '0px', threshold: 1.0 },
) {
  const observeRef = useRef<HTMLDivElement>(null);
  let intersectionObserver: IntersectionObserver;

  useEffect(() => {
    if (observeRef.current) {
      intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      }, options);
      intersectionObserver.observe(observeRef.current);
      return () => intersectionObserver.disconnect();
    }
  }, [callback, options]);

  return {
    observeRef,
  };
}
