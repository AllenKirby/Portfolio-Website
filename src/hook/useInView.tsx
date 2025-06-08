import { useEffect, useRef, useState, type RefObject } from 'react';

const useInViewObserver = <T extends HTMLElement>(threshold = 0.1, triggerOnce = false): [RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, triggerOnce]);

  return [ref, inView];
};

export default useInViewObserver;
