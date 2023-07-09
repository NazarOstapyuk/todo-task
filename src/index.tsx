import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import {setupStore} from "./store/store";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme/palette";

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
