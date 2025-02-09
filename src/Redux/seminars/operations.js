/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit"; // Функция для создания асинхронных экшенов.
import axios from "axios"; // Библиотека axios для выполнения HTTP-запросов.

// Создаем экземпляр axios с заданным базовым URL, чтобы при выполнении запросов не указывать полный путь каждый раз. Это удобный способ работы с API.
// Также это позволяет легко изменять базовый URL для всех запросов, если нужно.
export const seminarsInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// Асинхронный экшен для получения списка семинаров.
export const fetchSeminarsThunk = createAsyncThunk(
  "fetchSeminars",
  // Асинхронная функция. _ - это игнорируемый параметр, так как мы не передаем данные в этот экшен.
  async (_, thunkAPI) => {
    try {
      const res = await seminarsInstance.get(`/seminars`); // GET-запрос для получения всех семинаров.
      return res.data; // Возвращаем данные семинаров, которые автоматически попадут в Redux.
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Если ошибка то отклоняем экшен и передаем сообщение об ошибке.
    }
  }
);

// Асинхронный экшен для удаления семинара по ID.
export const deleteSeminarThunk = createAsyncThunk(
  "seminars/deleteSeminar", // Название экшена.
  // Принимаем id семинара, который нужно удалить.
  async (id, thunkAPI) => {
    try {
      const res = await seminarsInstance.delete(`/seminars/${id}`); // DELETE-запрос для удаления семинара.
      return res.data; // Возвращаем данные о результате операции (например, подтверждение удаления).
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронный экшен для обновления семинара.
export const updateSeminarThunk = createAsyncThunk(
  "seminars/updateSeminar",
  // Принимаем объект семинара с изменениями.
  async (editedSeminar, thunkAPI) => {
    try {
      const res = await seminarsInstance.put(
        `/seminars/${editedSeminar.id}`, // PUT-запрос для обновления семинара по его ID.
        editedSeminar // Отправляем данные измененного семинара.
      );
      return res.data; // Возвращаем обновленные данные семинара.
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
