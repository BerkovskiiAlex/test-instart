/** @format */

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage/Home";

// Основной компонент приложения
function App() {
  return (
    <Routes>
      {/* 
        Маршрут по умолчанию (index), который будет рендерить компонент Home. 
        Этот маршрут будет срабатывать, когда пользователь заходит на корневой путь.
      */}
      <Route index element={<Home />} />
      {/*
        Маршрут с path="*" означает, что он сработает на все несуществующие маршруты.
      */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
