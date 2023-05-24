import { useEffect, useState } from 'react';
import { useWindowSize} from 'usehooks-ts';

const breakpoints = {
  0: 'xs',
  600: 'sm',
  960: 'md',
  1280: 'lg',
  1920: 'xl',
};

const useBreakpoint = () => {
  return "md";
  // const [breakpoint, setBreakPoint] = useState('');
  // const { height, width } = useWindowSize();

  // useEffect(() => {
  //   if (0 < width && width < 600) {
  //     setBreakPoint(breakpoints[0]);
  //   }
  //   if (600 < width && width < 960) {
  //     setBreakPoint(breakpoints[600]);
  //   }
  //   if (960 < width && width < 1280) {
  //     setBreakPoint(breakpoints[960]);
  //   }
  //   if (1280 < width && width < 1920) {
  //     setBreakPoint(breakpoints[1280]);
  //   }
  //   if (width >= 1920) {
  //     setBreakPoint(breakpoints[1920]);
  //   }
  // }, [width]);
  // return breakpoint;
};

export default useBreakpoint;