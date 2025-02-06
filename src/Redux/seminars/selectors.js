/** @format */

export const getSeminars = (state) => {
  return state.seminarsList.seminars;
};

export const getSeminarForEdit = (state) => {
  return state.seminarsList.seminarForEdit;
};

export const getIsModalOpen = (state) => {
  return state.seminarsList.isModalOpen;
};
