/** @jsx jsx */
import React, { useState } from 'react';
import useScreenSize from '../context/use-screen-size';
import { jsx, css } from '@emotion/react';

import Menu from './menu';

import lessThan768 from './functions/less-than-768';
import style from '../style/style';
import layout from '../style/layout';

const headerCss = [
  layout.flex,
  layout.row,
  layout.justSpbw,
  layout.headerPadding,
  style.fade,
];
const headerTextCss = [
  style.incon,
  style.whiteUnderline,
  style.headerA,
  style.hoverA,
];
const aCss = [layout.padding25, layout.marginHalfRem, style.hoverA];

export default function Header() {
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
  const screenSize = useScreenSize();

  const label = !lessThan768(screenSize.width)
    ? `<QUINTINRUSSELL/>`
    : `<>QR</>`;

  const renderMenu = () => {
    if (menuDisplay)
      return (
        <React.Fragment>
          <div css={[layout.flex, layout.justEnd]}>
            <div
              css={[
                layout.flex,
                layout.col,
                layout.justSpbw,
                layout.alignC,
                layout.fitContent,
                layout.menuCont,
                style.incon,
                style.borderLight,
                style.fadeSolid,
              ]}
            >
              <a css={aCss} href="#about">{`-ABOUT-`}</a>
              <a css={aCss} href="#projects">{`-SEE MY WORK-`}</a>
              <a css={aCss} href="#contact">{`-CONTACT ME-`}</a>
            </div>
          </div>
        </React.Fragment>
      );
  };

  const renderHeaderTxt = (screenSize: number) => {
    if (screenSize > 768)
      return (
        <React.Fragment>
          <a
            href="mailto:quinn.j.russell@gmail.com"
            target="_blank"
            css={headerTextCss}
          >
            Let's Talk
          </a>

          <a
            href="https://github.com/Quintin-Russell/Quintin-Russell/blob/main/Quintin%20Russell%20Resume.pdf"
            target="_blank"
            css={headerTextCss}
          >
            Resume
          </a>
        </React.Fragment>
      );
  };

  return (
    <React.Fragment>
      <header css={headerCss}>
        <a href="" css={style.noUnderline}>
          <h1 css={[style.incon, style.fadeTxt]}>{label}</h1>
        </a>
        <div css={[layout.flex, layout.row, layout.alignC]}>
          {renderHeaderTxt(screenSize.width)}
          <Menu setMenuDisplay={setMenuDisplay} menuDisplay={menuDisplay} />
        </div>
      </header>

      {renderMenu()}
    </React.Fragment>
  );
}
