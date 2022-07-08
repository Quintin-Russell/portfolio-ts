/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import pageArr from '../pages';

import style from '../style/style';
import layout from '../style/layout';

const aCss = [style.hoverA, layout.padding25];

export default function Footer() {
  return (
    <div
      style={{ maxHeight: '3%' }}
      css={[
        style.fade,
        style.incon,
        layout.flex,
        layout.row,
        layout.justSpbw,
        layout.alignC,
        layout.footer,
      ]}
    >
      {pageArr.map((x) => {
        return (
          <a key={x.name} css={aCss} href={x.hash}>
            {x.display}
          </a>
        );
      })}
    </div>
  );
}
