/** @format */

import { createSlice } from "@reduxjs/toolkit"; // Функция для создания слайса (редюсера) с помощью Redux Toolkit.
import {
  fetchSeminarsThunk,
  deleteSeminarThunk,
  updateSeminarThunk,
} from "./operations";

// Начальное состояние для слайса семинаров.
const initialState = {
  seminars: [],
  seminarForEdit: null,
  isModalOpen: false,
  loading: false,
  error: null,
};

// Создание слайса для семинаров.
const seminarsSlice = createSlice({
  name: "seminarsList", // Имя слайса, которое будет использоваться для доступа к состоянию.
  initialState,
  reducers: {
    // Редюсеры для работы с состоянием (не асинхронные действия).
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload; // Открывает модальное окно.
    },
    setIsModalClose: (state, { payload }) => {
      state.isModalOpen = payload; // Закрывает модальное окно и сбрасывает семинар для редактирования.
      state.seminarForEdit = null;
    },
    setSeminarForEdit: (state, { payload }) => {
      state.seminarForEdit = payload; // Устанавливает семинар для редактирования.
    },
  },
  extraReducers: (builder) => {
    // Обработчики для асинхронных экшенов (через createAsyncThunk).
    builder
      // Обработка состояния при ожидании выполнения экшена для получения семинаров.
      .addCase(fetchSeminarsThunk.pending, (state) => {
        state.loading = true; // Устанавливаем статус загрузки.
        state.error = null; // Сбрасываем ошибку.
      })
      // Обработка успешного получения семинаров.
      .addCase(fetchSeminarsThunk.fulfilled, (state, { payload }) => {
        state.seminars = payload; // Сохраняем полученные данные о семинарах в состояние.
        state.loading = false; // Завершаем загрузку.
      })
      // Обработка ошибки при получении семинаров.
      .addCase(fetchSeminarsThunk.rejected, (state, { payload }) => {
        state.loading = false; // Завершаем загрузку.
        state.error = payload || "Не удалось загрузить семинары"; // Устанавливаем ошибку.
      })
      // Обработка состояния при ожидании выполнения экшена для удаления семинара.
      .addCase(deleteSeminarThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Обработка успешного удаления семинара.
      .addCase(deleteSeminarThunk.fulfilled, (state, { payload }) => {
        state.seminars = state.seminars.filter(
          (seminar) => seminar.id !== payload.id // Удаляем семинар из списка по ID.
        );
        state.loading = false;
      })
      // Обработка ошибки при удалении семинара.
      .addCase(deleteSeminarThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload || "Не удалось удалить семинар";
      })
      // Обработка состояния при ожидании выполнения экшена для обновления семинара.
      .addCase(updateSeminarThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Обработка успешного обновления семинара.
      .addCase(updateSeminarThunk.fulfilled, (state, { payload }) => {
        const index = state.seminars.findIndex(
          (seminar) => seminar.id === payload.id // Находим индекс семинара, который нужно обновить.
        );
        if (index !== -1) {
          state.seminars[index] = payload; // Заменяем старые данные семинара на новые.
        }
        state.loading = false;
      })
      // Обработка ошибки при обновлении семинара.
      .addCase(updateSeminarThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload || "Не удалось обновить семинар";
      });
  },
});

// Экспортируем экшены, чтобы использовать их в компонентах.
export const { setIsModalOpen, setIsModalClose, setSeminarForEdit } =
  seminarsSlice.actions;
// Экспортируем редюсер для использования в хранилище.
export const seminarsReducer = seminarsSlice.reducer;
