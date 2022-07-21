/** @jsx jsx */
import React, { useState, useReducer, useEffect } from 'react';
// import { jsx, css } from '@emotion/react';
import { jsx } from '@emotion/react';
import { css } from '@emotion/core';

import style from '../style/style';
import layout from '../style/layout';

interface TypewriterProps {
  font: string;
  fontSize: string;
  tarString: string;
  bold: string[];
  interval: number;
  cursorDisappear?: boolean;
}

interface Word {
  word: string;
  bold: string;
}

export default function Typewriter(props: TypewriterProps) {
  const [cursor, setCursor] = useState<boolean>(true);
  let [counter, setCounter] = useState<number>(0);
  const [dispString, pushDispString] = useReducer(
    (dispString: Word[], newVal: Word) => [...dispString, newVal],
    []
  );

  const tarStringSplit: string[] = props.tarString
    ? props.tarString.split(' ')
    : [];

  useEffect(() => {
    const intCursor = setInterval(() => {
      if (props.cursorDisappear && counter === tarStringSplit.length) {
        setCursor(false);
      } else {
        setCursor((cursor) => !cursor);
      }
      if (cursor && counter !== tarStringSplit.length) {
        const nextWord = props.bold.includes(tarStringSplit[counter])
          ? {
              word: tarStringSplit[counter],
              bold: 'bold'
            }
          : {
              word: tarStringSplit[counter],
              bold: 'normal'
            };
        pushDispString(nextWord);
        setCounter(counter++);
      }
    }, props.interval);

    return () => clearInterval(intCursor);
  }, []);

  const font = props.font ? style[props.font] : null;
  const fontSize = props.fontSize ? style[props.fontSize] : null;

  return (
    <p css={[layout.padding25, style.textCent]}>
      {dispString.map((x) => (
        <React.Fragment>
          <span
            key={x.word}
            css={
              x.bold === 'bold'
                ? [font, fontSize, style.bold]
                : [font, fontSize]
            }
          >
            {x.word}{' '}
          </span>
          <span key={`${x.word}1`}> </span>
        </React.Fragment>
      ))}
      <span
        css={cursor ? [font, fontSize] : [layout.noVisibility, font, fontSize]}
      >
        |
      </span>
    </p>
  );
}
