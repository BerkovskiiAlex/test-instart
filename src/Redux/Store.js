/** @format */

import { configureStore } from "@reduxjs/toolkit"; // Функция для конфигурации хранилища Redux.
import { seminarsReducer } from "./seminars/seminarsSlice"; // Редюсер для семинаров, который управляет состоянием семинаров.

export const store = configureStore({
  reducer: {
    seminarsList: seminarsReducer, // Указываем редюсер для управления состоянием списка семинаров.
    // 'seminarsList' — это ключ, который будет использоваться в состоянии Redux для хранения данных о семинарах.
    // 'seminarsReducer' — это редюсер, который обновляет это состояние в зависимости от отправленных экшенов.
  },
});
