import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; //redux의 provider
import { RecoilRoot } from "recoil"; //recoil의 provider

import App from "./App";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
