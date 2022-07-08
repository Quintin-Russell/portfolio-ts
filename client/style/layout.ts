import { css } from '@emotion/react';
import background1 from '../../server/public/images/background/background1.jpg';
import background2 from '../../server/public/images/background/background2.jpg';
import background3 from '../../server/public/images/background/background3.jpeg';

export default {
  //over-rides ctrls
  hidden: css`
    display: hidden !important;
  `,

  noVisibility: css`
    visibility: hidden;
  `,

  //background
  bkg1: css`
    background-image: url(${background1});
    background-size: cover !important;
    overflow: hidden scroll;
  `,

  bkg2: css`
    background-image: url(${background2});
    background-size: cover !important;
    overflow: hidden scroll;
  `,

  bkg3: css`
    background-image: url(${background3});
    background-size: cover !important;
    overflow: hidden scroll;
  `,

  // scroll
  scroll: css`
    overflow-y: scroll;
  `,

  // flexbox ctrls
  flex: css`
    display: flex;
  `,

  row: css`
    flex-direction: row;
  `,

  rowMobile: css`
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  col: css`
    flex-direction: column;
  `,

  alignC: css`
    align-items: center;
  `,

  justSpbw: css`
    justify-content: space-between;
  `,

  justCent: css`
    justify-content: center;
  `,

  justEnd: css`
    justify-content: flex-end;
  `,

  justStart: css`
    justify-content: flex-start;
  `,

  //width/height ctrls

  flex33: css`
    flex-basis: calc(100% / 3);
  `,

  flex50: css`
    flex-basis: 50%;
  `,

  flex66: css`
    flex-basis: calc(200% / 3);
  `,

  fitContent: css`
    width: fit-content;
  `,

  width10: css`
    width: 10%;
  `,

  width20: css`
    width: 20%;
  `,

  width50: css`
    width: 50%;
  `,

  width80: css`
    width: 80%;
  `,

  width100: css`
    width: 100%;
  `,

  height80: css`
    height: 80%;
  `,

  height100: css`
    height: 100%;
  `,

  //padding/margin ctrls

  padding0: css`
    padding: 0;
  `,

  padding25: css`
    padding: 0.25rem;
  `,

  padding2rem: css`
    padding: 2rem;
  `,

  bottomPadding: css`
    padding-bottom: 5%;
  `,

  topPadding: css`
    padding-top: 2rem;
  `,

  leftPadding: css`
    padding-left: 1rem;
  `,

  headerPadding: css`
    padding: 0 1rem;
  `,

  smallSidePadding: css`
    padding: 0 0.25rem;
  `,

  marginAuto: css`
    margin: auto;
  `,

  margin0: css`
    margin: 0;
  `,

  marginHalfRem: css`
    margin: 0.5rem;
  `,

  margin1rem: css`
    margin: 1rem;
  `,

  margin2rem: css`
    margin: 2rem;
  `,

  topMargin: css`
    margin-top: 2rem;
  `,

  leftMargin: css`
    padding-left: 0.5rem;
  `,

  //overflow ctrls

  overflowScroll: css`
    overflow: scroll;
  `,

  // component specific

  footer: css`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5%;
    padding: 0 1rem 0 1rem;
    font-size: 1rem;
    background: linear-gradient(to right, #000000, #0c0c0c, rgb(132, 132, 132));
  `,

  input: css`
    background: linear-gradient(to right, #7d7d7d61, rgb(255 255 255 / 63%));
    border-radius: 0.5rem;
  `,

  menuCont: css`
    margin: 0 1rem;
  `,

  toolsMargin: css`
    margin: 1.5rem 0;
  `,
};
