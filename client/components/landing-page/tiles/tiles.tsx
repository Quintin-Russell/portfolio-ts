/** @tsx tsx */
import React from 'react';
import { Page } from '../../../pages';

import layout from '../../../style/layout';
import style from '../../../style/style';

const tileTextCont = [layout.flex50, style.textCent];
const tileText = [style.incon];

const Tile = (props: { page: Page }) => {
  return (
    <div
      css={[
        layout.flex,
        layout.rowMobile,
        layout.width80,
        layout.alignC,
        layout.justSpbw,
        layout.tile,
        style.borderLight,
        style.fade
      ]}
    >
      <div css={tileTextCont}>
        <p css={tileText}>{props.page.display}</p>
      </div>
      <div css={tileTextCont}>
        <p css={tileText}>{props.page.description}</p>
      </div>
    </div>
  );
};

export default Tile;
