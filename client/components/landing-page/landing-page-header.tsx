/** @jsx jsx */
import React from 'react';

import style from '../../style/style';
import layout from '../../style/layout';

const container = [
  layout.flex,
  layout.col,
  layout.alignC,
  layout.justCent,
  style.textCent
];
const circle = [
  layout.flex,
  layout.row,
  layout.justCent,
  layout.alignC,
  style.fade,
  style.circle
];
const LandingPageHeader = () => {
  return (
    <div css={container}>
      <div css={circle}>
        <h1 css={[style.incon, style.fadeTxt]}>{`<QR/>`}</h1>
      </div>
    </div>
  );
};

export default LandingPageHeader;
