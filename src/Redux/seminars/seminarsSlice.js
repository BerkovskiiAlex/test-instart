/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { fetchSeminarsThunk, deleteSeminarThunk } from "./operations";

const initialState = {
  seminars: [],
  seminarModal: null,
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
    },
    addToSeminarModal: (state, { payload }) => {
      const seminar = state.seminars.find((seminar) => seminar.id === payload);
      if (seminar) {
        state.seminarModal = seminar;
      }
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
      });
  },
});

export const { setIsModalOpen, setIsModalClose, addToSeminarModal } =
  seminarsSlice.actions;
export const seminarsReducer = seminarsSlice.reducer;
