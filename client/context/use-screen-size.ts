import { createContext, useContext } from 'react';

interface ScreenSizeContextType {
  width: number;
  height: number;
}

const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(
  undefined,
);
export default (): ScreenSizeContextType => {
  let screenSizeContext = useContext(ScreenSizeContext);
  if (screenSizeContext === undefined) {
    throw Error(
      'ScreenSizeContext must be used inside of the App.tsx Component or it will not function properly.',
    );
  }
  return screenSizeContext;
};
