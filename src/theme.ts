export interface ITheme {
  color: ThemeColorKeys<ThemeColorOptions>;
  font: {
    family: {
      primary: string;
    };
    size: ThemeFontSizeKeys<ThemeFontSizeOptions>;
    weight: ThemeFontWeightKeys<ThemeFontWeightOptions>;
  };
  containerPadding: string;
  breakpoints: ThemeBreakpointKeys<ThemeBreakpointOptions>;
}

export type ThemeBreakpointOptions = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type ThemeColorOptions = {
  primary: string;
  secondary: string;
  dark: string;
  muted: string;
  light: string;
  lightClear: string
};

export type ThemeFontSizeOptions = {
  extra: string;
  large: string;
  regular: string;
  small: string;
  tiny: string;
};

export type ThemeFontWeightOptions = {
  bold: number;
  semiBold: number;
  regular: number;
};

type ThemeColorKeys<Options> = {
  [Propery in keyof Options]: string;
};

type ThemeFontSizeKeys<Options> = {
  [Property in keyof Options]: string;
};

type ThemeFontWeightKeys<Options> = {
  [Property in keyof Options]: number;
};

type ThemeBreakpointKeys<Options> = {
  [Property in keyof Options]: string;
};

const FONT_FAMILIES: { [key: string]: string } = {
  nunitoSans: `Nunito Sans`,
};

const COLOR_TOKENS: { [key: string]: string } = {
  accent1: `#6E0BD6`,
  accent2: `#D69020`,
  black: `#4A4A4A`,
  grey: `#A4A4A4`,
  pearl: `#F5F5F5`,
  white: `#FFFFFF`,
};

const theme: ITheme = {
  color: {
    primary: COLOR_TOKENS.accent1,
    secondary: COLOR_TOKENS.accent2,
    dark: COLOR_TOKENS.black,
    muted: COLOR_TOKENS.grey,
    light: COLOR_TOKENS.pearl,
    lightClear: COLOR_TOKENS.white
  },
  font: {
    family: {
      primary: FONT_FAMILIES.nunitoSans,
    },
    size: {
      extra: `27px`,
      large: `20px`,
      regular: `16px`,
      small: `14px`,
      tiny: `12px`,
    },
    weight: {
      bold: 700,
      semiBold: 600,
      regular: 400,
    },
  },
  containerPadding: `15px`,
  breakpoints: {
    sm: `375px`,
    md: `768px`,
    lg: `920px`,
    xl: `1200px`,
  },
};

export default theme;
