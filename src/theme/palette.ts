import { createTheme, ThemeProvider, PaletteColorOptions } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    gringo: PaletteColorOptions;
  }
  interface PaletteOptions {
    gringo?: PaletteColorOptions;
  }
}
declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        gringo: true;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        gringo: true;
    }
}
declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        gringo: true;
    }
}
export const theme = createTheme({
  palette: {
    gringo: {
     main: '#5dcb42',
    },
  },
});
