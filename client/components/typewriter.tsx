/** @jsx jsx */
import React, { useState, useReducer, useEffect, ReactElement } from 'react';
import { jsx, css, SerializedStyles } from '@emotion/react';

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

export default function Typewriter(props: TypewriterProps): ReactElement {
  const [typingComplete, setTypingComplete] = useState(false);

  // Add next value to current string each time called
  const [displayString, dispatchDisplayString] = useReducer(
    (currentString: Word[], nextValue: Word) => [...currentString, nextValue],
    []
  );
  let counter = 0;
  const tarStringSplit: string[] | null = props.tarString
    ? props.tarString.split(' ')
    : null;
  const font: SerializedStyles | null = props.font ? style[props.font] : null;
  const fontSize: SerializedStyles | null = props.fontSize
    ? style[props.fontSize]
    : null;

  // Animation runs at twice the speed of the word display
  // slow it down by increasing the interval
  const cursorBlinkSpeed = props.interval * 2;

  useEffect(() => {
    const intCursor = setInterval(() => {
      if (counter < tarStringSplit.length) {
        const nextWord: Word = props.bold.includes(tarStringSplit[counter])
          ? {
              word: tarStringSplit[counter],
              bold: 'bold'
            }
          : {
              word: tarStringSplit[counter],
              bold: 'normal'
            };

        // If this is the last word in the display text
        // Note: counter starts at 0, length starts at 1
        if (counter === tarStringSplit.length - 1) {
          setTypingComplete(true);
        }
        // Add next word
        dispatchDisplayString(nextWord);

        // Update/Add to counter
        counter++;
      }
    }, props.interval);

    return () => clearInterval(intCursor);
  }, []);

  return (
    <p css={[layout.padding25, style.textCent]}>
      {displayString.map((x, index) => (
        <span
          key={index}
          css={[font, fontSize, x.bold === 'bold' ? style.bold : '']}
        >
          {x.word}{' '}
        </span>
      ))}
      {!typingComplete ? (
        <span
          css={[
            css`
              animation: ${style.bounce} ${cursorBlinkSpeed}ms ease infinite;
            `,
            font,
            fontSize
          ]}
        >
          |
        </span>
      ) : null}
    </p>
  );
}
