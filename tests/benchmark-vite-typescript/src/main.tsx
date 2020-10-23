import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Entry_00_0000 from "./components/Entry_00_0000";
import { getModCount } from "./modCount";

ReactDOM.render(
  <React.StrictMode>
    <button onClick={() => alert(getModCount())}>How many components?</button>
    <Entry_00_0000></Entry_00_0000>
  </React.StrictMode>,
  document.getElementById("root")
);
