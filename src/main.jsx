import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StyleSheetManager
            shouldForwardProp={(prop) => prop !== "backgroundcolor"}
          >
            <App />
          </StyleSheetManager>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
