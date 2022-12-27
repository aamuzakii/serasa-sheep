import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from './store'
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import { client } from "./graphql/config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

reportWebVitals();
