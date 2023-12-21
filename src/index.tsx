import 'core-js';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Route,
  Routes,
  HashRouter as Router,
  Link 
} from 'react-router-dom';
import { Game } from './components/Game';
import { Start } from './components/Start';
import { createRoot } from 'react-dom/client';

declare global {
  interface Window {
    spin: any;
    addPlayer: any;
    removePlayer: any;
    lasttimeout: any;
    reset: any;
  }
}

function App(): JSX.Element {
  return (
    <>
    <style>
      {`
      html {
        overflow: hidden;
      }
      `}
    </style>
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<Game />} />
      </Routes>
    </Router>
    </>
  );
}


createRoot(document.getElementById("app")).render(<App />);
