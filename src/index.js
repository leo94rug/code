import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
