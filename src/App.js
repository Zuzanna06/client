import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Arts from "./pages/Arts";
import Update from "./pages/Update";
import "../src/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Arts />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
