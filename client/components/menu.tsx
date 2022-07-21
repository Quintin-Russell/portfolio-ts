/** @jsx jsx */
import React from 'react';
// import { jsx, css } from '@emotion/react/macro';
import { jsx } from '@emotion/react';
import { css } from '@emotion/core';
import { VscListSelection } from 'react-icons/vsc';

import style from '../style/style';
import layout from '../style/layout';

interface MenuProps {
  setMenuDisplay(menuDisplay: boolean): void;
  menuDisplay: boolean;
}

export default function Menu(props: MenuProps) {
  return (
    <React.Fragment>
      <div
        onClick={() => props.setMenuDisplay(!props.menuDisplay)}
        css={[layout.flex, layout.alignC, style.headerA]}
      >
        <VscListSelection
          css={[style.menuIcon]}
          style={props.menuDisplay ? { transform: 'rotate(90deg' } : undefined}
        />
      </div>
    </React.Fragment>
  );
}
