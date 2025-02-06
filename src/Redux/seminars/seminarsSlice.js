/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSeminarsThunk,
  deleteSeminarThunk,
  updateSeminarThunk,
} from "./operations";

const initialState = {
  seminars: [],
  seminarForEdit: null,
  isModalOpen: false,
};

const seminarsSlice = createSlice({
  name: "seminarsList",
  initialState,
  reducers: {
    setIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    setIsModalClose: (state, { payload }) => {
      state.isModalOpen = payload;
      state.seminarForEdit = null;
    },
    setSeminarForEdit: (state, { payload }) => {
      state.seminarForEdit = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeminarsThunk.fulfilled, (state, { payload }) => {
        state.seminars = payload;
      })
      .addCase(deleteSeminarThunk.fulfilled, (state, { payload }) => {
        state.seminars = state.seminars.filter(
          (seminar) => seminar.id !== payload.id
        );
      })
      .addCase(updateSeminarThunk.fulfilled, (state, { payload }) => {
        const index = state.seminars.findIndex(
          (seminar) => seminar.id === payload.id
        );
        if (index !== -1) {
          state.seminars[index] = payload;
        }
      })
      .addCase(updateSeminarThunk.rejected, (state, { payload }) => {
        console.error("Error updating seminar:", payload);
      });
  },
});

export const { setIsModalOpen, setIsModalClose, setSeminarForEdit } =
  seminarsSlice.actions;
export const seminarsReducer = seminarsSlice.reducer;
