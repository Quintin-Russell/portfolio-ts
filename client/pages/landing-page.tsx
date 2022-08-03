/** @jsx jsx */
import { useScreenSize } from '../context/use-screen-size';
import LandingPageHeader from '../components/landing-page/landing-page-header';
import Tile from '../components/landing-page/tiles/tiles';

import pageArr from '../pages';
import layout from '../style/layout';

const LandingPage = () => {
  return (
    <div css={[layout.bkg1]}>
      <LandingPageHeader />
      <div
        css={[
          layout.flex,
          layout.col,
          layout.justCent,
          layout.alignC,
          layout.padding2rem
        ]}
      >
        {pageArr.map((x) => (
          <Tile key={x.name} page={x} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
