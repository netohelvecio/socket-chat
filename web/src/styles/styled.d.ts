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
      greyGreyDark: string;
    };

    font: {
      roboto: string;
      workSans: string;
    };
  }
}