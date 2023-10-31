import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider toastOptions={{ defaultOptions: { position: "top-right", variant:"solid" } }}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
