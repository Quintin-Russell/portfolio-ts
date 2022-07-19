/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import { useScreenSize, ScreenSizeContext } from './context/use-screen-size';
import parseRoute from './parse-route';

import LandingPage from './pages/landing-page';
// import About from './pages/about';
// import Projects from './pages/projects';
// import Contact from './pages/contact';

/** TS declarations */
type ScreenSizeState = { width: number; height: number };

type Hash = { path: string; params: URLSearchParams };

export default function App() {
  const [hash, setHash] = useState<Hash>(parseRoute(window.location.hash));
  const [screenSize, setScreenSize] = useState<ScreenSizeState>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  $(document)[0].title = '../server/public/images/flavicon/favicn.ico';
  $(window).on('resize', (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setScreenSize({ width, height });
  });

  useEffect((): void => {
    $(window).on('hashchange', () => {
      const newHash: Hash = parseRoute(window.location.hash);
      setHash(newHash);
    });
  }, []);

  const determinePage = (hash: Hash): React.ReactElement => {
    // if (hash.path === "about") return <About />;
    // if (hash.path === "projects") return <Projects />;
    // if (hash.path === "contact") return <Contact />;
    return <LandingPage />;
  };

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {determinePage(hash)}
    </ScreenSizeContext.Provider>
  );
}
