
import React from "react";
import { createRoot } from "react-dom/client";
import {
Route,
  HashRouter as Router,
  Routes
} from 'react-router-dom';
import { Label } from "./components/Label.tsx";
import { Start } from "./components/Start.tsx";


function App(): any {
  return (
    <React.Fragment>
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
        </Routes>
      </Router>
    </React.Fragment>
  );
}


createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);