import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all components 
import { Home } from "./pages";
import { Navbar } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <main>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
