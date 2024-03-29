/** @jsx jsx */
import React from 'react';
import { VscListSelection } from 'react-icons/vsc';

import style from '../style/style';
import layout from '../style/layout';

interface MenuProps {
  setMenuDisplay(menuDisplay: boolean): void;
  menuDisplay: boolean;
}

const Menu = (props: MenuProps) => {
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
};

export default Menu;
