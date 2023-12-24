// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./component/ContactApp";
import "./css/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
