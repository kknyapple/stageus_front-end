//App 컴포넌트를 root div에 랜더링 시키는 파일
import React from "react"; //react import 작업
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App"; //내가 만든 App.js import 작업
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(store.getState());
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
