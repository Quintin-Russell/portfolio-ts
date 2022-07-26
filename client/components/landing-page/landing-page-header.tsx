/** @tsx tsx */
import React, { ReactElement } from 'react';
import Typewriter from '../typewriter';

import QRFrance from '../../../server/public/images/qrPics/QRfrance.png';

import style from '../../style/style';
import layout from '../../style/layout';

const container = [
  layout.flex,
  layout.col,
  layout.alignC,
  layout.justCent,
  layout.padding2rem,
  style.dropshadow,
  style.textCent
];
const circle = [
  layout.flex,
  layout.row,
  layout.justCent,
  layout.alignC,
  style.fade,
  style.dropshadow,
  style.circle
];
const jobDesc = [layout.bkgBlack, layout.padding25, style.incon, style.light];
const aCss = [
  layout.padding25,
  layout.marginHalfRem,
  style.incon,
  style.hoverA,
  style.cursor
];

const LandingPageHeader = (): ReactElement => {
  return (
    <React.Fragment>
      <div css={container}>
        <div css={circle}>
          <img css={style.circle} src={QRFrance} alt="QRfrance" />
        </div>
        <div css={[...jobDesc, layout.topPadding, style.font1halfrem]}>
          <span css={style.landingPgTxt_or}>{`<`}</span>
          <span css={style.landingPgTxt_bl}>{`QuintinRussell `}</span>
          <span
            css={style.landingPgTxt_bl}
          >{`profession=“software-engineer” `}</span>
          <span
            css={style.landingPgTxt_bl}
          >{`tools=[“JavaScript”, “Python”, “CSS”, “HTML”] `}</span>
          <span css={[style.landingPgTxt_or]}>{`/>`}</span>
        </div>
        <Typewriter
          font="pfDisp"
          fontSize="font2halfrem"
          tarString="
              I build intelligent and impactful applications that work.
              "
          bold={[
            'I',
            'build',
            'intelligent',
            'and',
            'impactful',
            'applications',
            'that',
            'work.'
          ]}
          interval={300}
          cursorDisappear={true}
        />
        <Typewriter
          font="incon"
          fontSize="font1rem"
          tarString="Click a link below!"
          bold={['Click', 'a', 'link', 'below!']}
          interval={300}
        />
        <div
          css={[
            layout.flex,
            layout.row,
            layout.width100,
            layout.justEven,
            layout.alignC
          ]}
        ></div>
      </div>{' '}
      <div css={[layout.flex, layout.justEven, style.noBorderSides]}>
        <a css={aCss} href="#about">{`-ABOUT-`}</a>
        <a css={aCss} href="#projects">{`-SEE MY WORK-`}</a>
        <a css={aCss} href="#contact">{`-CONTACT ME-`}</a>
      </div>
    </React.Fragment>
  );
};

export default LandingPageHeader;
