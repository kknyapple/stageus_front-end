//App 컴포넌트를 root div에 랜더링 시키는 파일
import React from "react"; //react import 작업
import ReactDOM from "react-dom/client";

import App from "./App"; //내가 만든 App.js import 작업

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
