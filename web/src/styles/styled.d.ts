import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      textBase: string;
      greenDark: string;
      greenDarkHover: string;
      ghostWhite: string;
      blue: string;
      chatBackground: string;
      greyGreenDark: string;
      cardStatus: string;
    };

    font: {
      roboto: string;
      workSans: string;
    };
  }
}