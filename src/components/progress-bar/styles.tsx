// @mui
import { useTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

// ----------------------------------------------------------------------

export default function StyledProgressBar() {
  const theme = useTheme();

  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '.bar': {
            top: 0,
            left: 0,
            height: 3,
            zIndex: 9999,
            width: '100%',
            position: 'fixed',
            backgroundColor: '#5dcb42',
            boxShadow: `0 0 2px #5dcb42`,
          },
          '.peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
            boxShadow: `0 0 10px #5dcb42, 0 0 5px #5dcb42`,
          },
        },
      }}
    />
  );

  return inputGlobalStyles;
}
