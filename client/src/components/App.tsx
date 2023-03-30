import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { mainTheme } from './../themes/mainTheme';
import { AppRouter } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};
