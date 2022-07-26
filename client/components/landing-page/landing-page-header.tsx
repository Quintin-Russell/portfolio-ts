/** @tsx tsx */
import React, { ReactElement } from 'react';
import { jsx, css } from '@emotion/react';
import { useScreenSize } from '../../context/use-screen-size';
import lessThan768 from '../functions/less-than-768';
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
  // style.fade,
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
const jobDesc = [style.incon, style.light, layout.padding25];
const aCss = [
  layout.padding25,
  layout.marginHalfRem,
  style.incon,
  style.hoverA,
  style.cursor
];

const LandingPageHeader = (): ReactElement => {
  const screenSize = useScreenSize();
  return (
    <React.Fragment>
      <div css={container}>
        <div css={circle}>
          <img css={style.circle} src={QRFrance} alt="QRfrance" />
          {/* <h1 css={[style.incon, style.fontWeight300]}>{`<QR/>`}</h1> */}
        </div>
        <div css={[...jobDesc, layout.topPadding, style.font1halfrem]}>
          {/* <div
          css={
            !lessThan768(screenSize.width)
              ? [...jobDesc, style.font3rem]
              : [...jobDesc, style.font2halfrem]
          }
        > */}
          <span css={style.landingPgTxt_or}>{`<`}</span>
          <span css={style.landingPgTxt_bl}>{`QuintinRussell `}</span>
          {/* </div> */}
          {/* <div
          css={
            !lessThan768(screenSize.width)
              ? [...jobDesc, style.font3rem]
              : [...jobDesc, style.font2halfrem]
          }
        > */}
          <span
            css={style.landingPgTxt_bl}
          >{`profession=“software-engineer” `}</span>
          {/* </div> */}
          {/* <div
          css={
            !lessThan768(screenSize.width)
              ? [...jobDesc, style.font3rem]
              : [...jobDesc, style.font2halfrem]
          }
        > */}
          <span
            css={style.landingPgTxt_bl}
          >{`tools=[“JavaScript”, “Python”, “CSS”, “HTML”] `}</span>
          {/* </div> */}
          {/* <div
          css={
            !lessThan768(screenSize.width)
              ? [...jobDesc, style.font3rem, style.landingPgTxt_or]
              : [...jobDesc, style.font2halfrem, style.landingPgTxt_or]
          }
        > */}
          <span css={[style.landingPgTxt_or]}>{`/>`}</span>
          {/* </div> */}
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
