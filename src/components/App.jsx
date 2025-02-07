/** @format */

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
