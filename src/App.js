import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
