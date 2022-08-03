/** @tsx tsx */
import React from 'react';
import { Page } from '../../../pages';

import layout from '../../../style/layout';
import style from '../../../style/style';

const tileTextCont = [layout.flex50, style.textCent];
const tileText = [layout.paddingHalfrem, style.incon];

const Tile = (props: { page: Page }) => {
  return (
    <a
      href={props.page.hash}
      css={[
        layout.flex,
        layout.rowMobile,
        layout.width80,
        layout.alignC,
        layout.justSpbw,
        layout.margin1rem,
        layout.tile,
        style.noUnderline,
        style.borderLight,
        style.cursor,
        style.fade
      ]}
    >
      <div css={tileTextCont}>
        <p css={tileText}>{props.page.display}</p>
      </div>
      <div css={tileTextCont}>
        <p css={tileText}>{props.page.description}</p>
      </div>
    </a>
  );
};

export default Tile;
