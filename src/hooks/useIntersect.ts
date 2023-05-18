import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIntersect = (ref, delay = 1000) => {
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
    setTimeout(() => {
      if (ref?.current) observer.observe(ref.current);
    }, delay)


  }, [ref.current, intersecting]);

  return { isIntersecting: intersecting, first, hasIntersected };

};

export default useIntersect;