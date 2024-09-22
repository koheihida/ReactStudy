import { StrictMode } from "react";
import {createRoot} from "react-dom/client";

const rootEllement = document.getElementById("root");
const root = createRoot(rootEllement);

const App = () => {
  return (
    <>
    <h1>Hello World</h1>
    <p>Digital Nature</p>
    </>
  ); 
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
