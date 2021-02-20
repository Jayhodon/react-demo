import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/style.scss";
import {App} from "./components/App"
import store from './store'


const ROOT = document.querySelector("#app") as HTMLElement ;

ReactDOM.render(<App store = {store} />, ROOT);