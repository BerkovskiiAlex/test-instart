/** @format */

import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем ReactDOM для рендеринга приложения.
import App from "./components/App"; // Главный компонент приложения.
import reportWebVitals from "./reportWebVitals"; // Функция для мониторинга производительности приложения.
import { BrowserRouter } from "react-router-dom"; // Компонент BrowserRouter для маршрутизации.
import { Provider } from "react-redux"; // Компонент Provider из Redux используется для подключения хранилища.
import { store } from "./Redux/Store.js"; // Xранилище Redux используется для управления состоянием приложения.

// Рендерим приложение в элемент с id "root" в HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Оборачиваем приложение в компонент Provider, чтобы доступ к хранилищу Redux был возможен из всех компонентов. */}
    <BrowserRouter>
      {/* Оборачиваем приложение в BrowserRouter для включения маршрутизации (обработки URL) в приложении. */}
      <App />
      {/* App - главный компонент приложения, который содержит все остальные компоненты и логику приложения. */}
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
