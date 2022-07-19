import React, { createContext, useContext } from 'react';

interface ScreenSizeContextType {
  width: number;
  height: number;
}

export const ScreenSizeContext = createContext<
  ScreenSizeContextType | undefined
>(undefined);
export const useScreenSize = (): ScreenSizeContextType => {
  let screenSizeContextTest = useContext(ScreenSizeContext);
  if (screenSizeContextTest === undefined) {
    throw Error(
      'ScreenSizeContext must be used inside of the App.tsx Component or it will not function properly.'
    );
  }
  return screenSizeContextTest;
};
