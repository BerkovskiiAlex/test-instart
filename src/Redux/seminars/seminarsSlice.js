/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { fetchSeminarsThunk } from "./operations";

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
    builder.addCase(fetchSeminarsThunk.fulfilled, (state, { payload }) => {
      state.seminars = payload;
    });
  },
});

export const { setIsModalOpen, setIsModalClose, addToSeminarModal } =
  seminarsSlice.actions;
export const seminarsReducer = seminarsSlice.reducer;
