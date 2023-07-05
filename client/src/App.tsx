import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// import all components
import { ExplorePage, Home, LoginSingUp } from "./pages";
import { Navbar } from "./components";

function App() {
  const [isNavbarShow, setIsNavbarShow] = useState(true);

  return (
    <main>
      {isNavbarShow && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/*"
          element={<LoginSingUp setIsNavbarShow={setIsNavbarShow} />}
        />
        <Route
          path="/search"
          element={<ExplorePage setIsNavbarShow={setIsNavbarShow} />}
        />
      </Routes>
    </main>
  );
}

export default App;
