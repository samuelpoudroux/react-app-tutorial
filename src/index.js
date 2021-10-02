import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { store } from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
