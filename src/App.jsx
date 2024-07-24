import { BrowserRouter } from "react-router-dom";
import "./App.css";

import RoutesApp from "./RoutesApp";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <div className="container-bg"></div>
    </BrowserRouter>
  );
}

export default App;
