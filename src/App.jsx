import { BrowserRouter } from "react-router-dom";
import "./App.css";

import RoutesApp from "./RoutesApp";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <BrowserRouter>
      <RoutesApp />
      <div className="container-bg"></div>
    </BrowserRouter>
  );
}

export default App;
