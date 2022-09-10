import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Example from "./Components/Example/Example";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/live" element={<Example />} />
        <Route path="/about" element={<Example />} />
        <Route path="/community" element={<Example />} />
        <Route path="/contact" element={<Example />} />
        <Route path="/signin" element={<Example />} />
        <Route path="/signup" element={<Example />} />
      </Route>
    </Routes>
  );
}

export default App;
