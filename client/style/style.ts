import { css, keyframes } from '@emotion/react';

export default {
  //fonts
  incon: css`
    font-family: Inconsolata, monospace;
  `,

  monts: css`
    font-family: Montserrat, sans-serif;
  `,

  pfDisp: css`
    font-family: 'Playfair Display', serif;
  `,

  bold: css`
    font-weight: 600;
  `,

  fontWeight300: css`
    font-weight: 300;
  `,

  light: css`
    font-weight: 100;
  `,

  fade: css`
    background: linear-gradient(
      to right,
      #000000,
      #0c0c0c,
      rgba(132, 132, 132, 0.5)
    );
  `,

  // glass: css`
  //   background-color: rgba(170 170 170 / 6%);
  //   backdrop-filter: blur(5px);
  // `,

  fadeSolid: css`
    background: linear-gradient(to right, #000000, #0c0c0c, rgb(132, 132, 132));
  `,

  font1rem: css`
    font-size: 1rem;
  `,

  font1halfrem: css`
    font-size: 1.5rem;
  `,

  font2rem: css`
    font-size: 2rem;
  `,

  font2halfrem: css`
    font-size: 2.5rem;
  `,

  font3rem: css`
    font-size: 3rem;
  `,

  textCent: css`
    text-align: center;
  `,

  //component specific text
  dropshadow: css`
    filter: drop-shadow(0 0 1rem black);
  `,

  fadeTxt: css`
    font-size: 2rem;
    font-weight: 300;
    background: -webkit-linear-gradient(left, #fff, #545454);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,

  landingPgTxt_or: css`
    color: #e28d29;
  `,

  landingPgTxt_bl: css`
    color: #5db2b8;
  `,

  arrow: css`
    font-size: 4rem;

    :hover {
      cursor: pointer;
    }
  `,

  //underline
  noUnderline: css`
    text-decoration: none;
  `,

  whiteUnderline: css`
    text-decoration: underline;
  `,

  //list styling
  noListStyle: css`
    list-style: none;
  `,

  //borders
  borderLight: css`
    border: 0.05rem solid #fff;
  `,

  noBorderBottom: css`
    border-top: 0.05rem solid #fff;
    border-left: 0.05rem solid #fff;
    border-right: 0.05rem solid #fff;
    border-bottom: 0;
  `,

  borderBottom: css`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 0.05rem solid #fff;
  `,

  //component specific stylegit add .

  circle: css`
    height: 11rem;
    border-radius: 50%;
  `,

  techIconBasics: css`
    height: 10rem;
  `,

  headerA: css`
    font-size: 1.5rem;
    color: #fff;
    padding: 0 1rem;
  `,

  hoverA: css`
    transition: all ease 2s;

    :hover {
      font-size: 1.25rem;
      cursor: pointer;
    }
  `,

  menuIcon: css`
    transition: all ease 0.5s;
    transform: rotate(180deg);
    font-size: 2rem;

    :hover {
      font-size: 3rem;
      cursor: pointer;
    }
  `,

  highlightedTab: css`
    background-color: #e9e9e960;
  `,

  dots: css`
    font-size: 1rem;
  `,

  cursor: css`
    transition: all ease 2s;

    :hover {
      cursor: pointer;
      font-size: 1.5rem;
    }
  `,

  //imgs
  img: css`
    height: 5rem;
  `,

  bounce: keyframes`
      49% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      99% {
        opacity: 0;
      }
    `
};
