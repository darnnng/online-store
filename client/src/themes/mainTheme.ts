import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#0f0f0f',
      contrastText: '#f5f5f7', //белый
    },
    secondary: {
      main: '#73b1c1', //blue
      contrastText: '#666666', //cерый
    },
  },
  typography: { fontFamily: 'Montserrat' },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: 10,
          height: 10,
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#bdbdbd',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#f5f5f7',
        },
        '*': {
          margin: 0,
          padding: 0,
        },
        body: {
          minWidth: 320,
          margin: 0,
        },
        '#root': {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100vh',
          margin: '0 auto',
        },

        header: {
          flexGrow: 0,
        },
        footer: {
          flexGrow: 0,
        },
        main: {
          flexGrow: 1,
          position: 'relative',
          overflow: 'hidden',
          paddingBottom: '20px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 18,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 18,
          overflowX: 'hidden',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #ffffff inset',
          },
        },
      },
    },
  },
});
