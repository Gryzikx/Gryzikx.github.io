import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";

const app = <MuiThemeProvider><BrowserRouter><App /></BrowserRouter></MuiThemeProvider>;

let render = () => ReactDOM.render(app, document.getElementById("root"));

render();

declare var module: { hot: any };
if (module.hot) {
    module.hot.accept();
}

