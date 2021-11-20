import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
//import reportWebVitals from './reportWebVitals';
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./state/store.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
				<App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);