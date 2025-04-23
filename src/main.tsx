import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Game from "./components/board";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Game />
  </StrictMode>
);
