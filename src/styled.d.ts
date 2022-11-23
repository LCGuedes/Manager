import "styled-components";

interface IPallete {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    fontSize: string;
    pallete: {
      common: {
        black: string;
        white: string;
        errorColor: string;
      };
      primary: IPallete;
      secundary: IPallete;
    };
  }
}
