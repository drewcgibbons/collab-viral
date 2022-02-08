import styled from 'styled-components'

export type Size = 'SM' | 'MD' | 'LG' | 'XL' | 'XXL'

export const SIZES = {
  SM: 'SM',
  MD: 'MD',
  LG: 'LG',
  XL: 'XL',
  XXL: 'XXL',
}

export const breakpointValues = {
  SM: 480,
  MD: 768,
  LG: 992,
  XL: 1280,
  XXL: 1536,
}

export const BREAKPOINTS = {
  [SIZES.SM]: `@media (max-width: ${breakpointValues.SM}px)`,
  [SIZES.MD]: `@media (max-width: ${breakpointValues.MD}px)`,
  [SIZES.LG]: `@media (max-width: ${breakpointValues.LG}px)`,
  [SIZES.XL]: `@media (max-width: ${breakpointValues.XL}px)`,
  [SIZES.XXL]: `@media (max-width: ${breakpointValues.XXL}px)`,
}

export const COLORS = {
  BLACK: {
    100: '#202020',
    200: '#595959',
    300: '#989898',
    400: '#F0F0F0',
  },
  CORAL: {
    100: '#FF7F71',
    200: '#FF9B8F',
  },
  GREEN: {
    100: '#355F66',
    200: '#88BBBC',
    300: '#CFE1E1',
  },
  GRAY: '#F7F7F7',
  DISABLED_GRAY: '#C4C4C4',
  WHITE: '#FFFFFF',
  RED: '#FF7F71',
}

const textStyling = (
  fontWeight: number,
  fontSize: string,
  lineHeight: string,
  smFontSize?: string,
  smLineHeight?: string
) => {
  return `
      font-family: Inter;
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      margin: 0;
      ${BREAKPOINTS.SM} {
        ${smFontSize ? `font-size: ${smFontSize};` : ''}
        ${smLineHeight ? `line-height: ${smLineHeight};` : ''}
      }
  `
}

export const FONTS = {
  H1: styled.h1`
    ${textStyling(500, '33px', '40px')}
  `,
  H2: styled.h2`
    ${textStyling(600, '23px', '28px', '28px', '34px')}
  `,
  H3: styled.h3`
    ${textStyling(500, '19px', '23px', '23px', '28px')}
  `,
  H4: styled.h4`
    ${textStyling(500, '16px', '19px', '19px', '23px')}
  `,
  H5: styled.h5`
    ${textStyling(400, '14px', '17px', '16px', '19px')}
  `,
  H6: styled.h6`
    ${textStyling(400, '12px', '15px', '14px', '17px')}
  `,
}

export const SPACING = {
  0: '0px',
  px: '1px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
}
