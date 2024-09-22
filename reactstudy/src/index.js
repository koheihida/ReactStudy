import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import {App} from "./App"

const rootEllement = document.getElementById("root");
const root = createRoot(rootEllement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
