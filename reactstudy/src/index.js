import { StrictMode } from "react";
import {createRoot} from "react-dom/client";

const rootEllement = document.getElementById("root");
const root = createRoot(rootEllement);

root.render(<StrictMode><h1>Hello World</h1></StrictMode>);
