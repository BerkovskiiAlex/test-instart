/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const seminarsInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchSeminarsThunk = createAsyncThunk(
  "fetchSeminars",
  async (_, thunkAPI) => {
    try {
      const res = await seminarsInstance.get(`/seminars`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSeminarThunk = createAsyncThunk(
  "seminars/deleteSeminar",
  async (id, thunkAPI) => {
    try {
      const res = await seminarsInstance.delete(`/seminars/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
