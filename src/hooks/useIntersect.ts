import { useEffect, useState } from 'react';
import { useAppSelector } from '../store';

const useIntersect = (ref) => {
  const { loading } = useAppSelector(state => state.load)
  const [intersecting, setIntersecting] = useState(false);
  const [first, setFirst] = useState(undefined as boolean | undefined);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setIntersecting(isIntersecting)
      if (isIntersecting) setHasIntersected(true)
      if (first === undefined) setFirst(true)
      else setFirst(false)
    });

    if (!loading && ref?.current) {
        if (ref?.current) observer.observe(ref?.current);
    }

    return () => {
      // observer?.unobserve(ref?.current);
      observer?.disconnect();

    };
  }, [ref.current, loading]);

  return { isIntersecting: intersecting, first, hasIntersected };
};

export default useIntersect;
