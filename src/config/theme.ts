import { DefaultTheme } from "styled-components";

interface Fonts {
  lato: string;
  playfair: string;
}
interface Colors {
  towerGray: string;
  gableGreen: string;
  gableGreenDark: string;
  catskillWhite: string;
  grannySmith: string;
  white: string;
  doveGray: string;
  gallery: string;
  keppel: string;
  viking: string;
}
interface Theme extends DefaultTheme {
  maxWidth: string;
  fonts: Fonts;
  colors: Colors;
}

declare module "styled-components" {
  export interface DefaultTheme {
    maxWidth: string;
    fonts: Fonts;
    colors: Colors;
  }
}

export const theme: Theme = {
  maxWidth: "1440px",
  fonts: {
    lato: "'Lato', sans-serif",
    playfair: "'Playfair Display', serif",
  },
  colors: {
    towerGray: "#A7B6B7",
    gableGreenDark: "#0F2626",
    gableGreen: "#163637",
    catskillWhite: "#F5FAFA",
    grannySmith: "#8AA2A3",
    white: "#FFFFFF",
    doveGray: "#707070",
    gallery: "#EDEDED",
    keppel: "#3F9B9E",
    viking: "#54CDD1",
  },
};
