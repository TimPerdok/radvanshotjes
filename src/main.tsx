
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  HashRouter as Router,
  Routes
} from 'react-router-dom';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import Setup from "./components/pages/Setup.tsx";
import { Game } from "./components/Game.tsx";
import { ToastProvider } from "./components/toast/ToastProvider.tsx";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(134, 203, 146)',
    },
    secondary: {
      main: '#e45456',
    },
  },
});

export const ROUTES = {
  SETUP: "/",
  WHEEL: "/wheel",
};


//   "Gerben",
//   "Tim",
//   "Nick",
//   "Rian",
//   "Maaike",
//   "Ciska",
//   "Lotte",
//   "Rikus",
//   "Danique",
//   "Sjoerd",
//   "Simon",
//   "Jesper",
//   "Gertrude",
//   "Britt",
//   "Twan",
//   "Robert-Jan",
//   "Jesse",
//   "Esther",
//   "Marnix",
//   "Annemarie",
//   "Margo",
//   "Olav",


function App(): React.ReactElement {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <ToastProvider>
            <Router>
              <Routes>
                <Route path={ROUTES.SETUP} element={<Setup />} />
                <Route path={ROUTES.WHEEL} element={<Game />} />
              </Routes>
            </Router>
          </ToastProvider>
        </SCThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}


createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);