
import React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  HashRouter as Router,
  Routes
} from 'react-router-dom';
import Setup from "./components/Setup.tsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

function App(): React.ReactElement {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Setup />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}


createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);