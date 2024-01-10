import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from './routes';
import { LightTheme } from './shared/themes';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Router>
        <AppRoutes /> 
      </Router>
    </ThemeProvider> 
  );
}

