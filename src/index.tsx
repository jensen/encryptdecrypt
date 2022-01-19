import { render } from "solid-js/web";
import { Router as BrowserRouter } from "solid-app-router";

import Router from "./Router";

import "./index.css";

render(
  () => (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  ),
  document.getElementById("root") as HTMLElement
);
