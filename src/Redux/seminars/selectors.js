/** @format */

// Функция-селектор для получения списка семинаров из состояния Redux.
export const getSeminars = (state) => {
  return state.seminarsList.seminars;
};

// Функция-селектор для получения семинара, который выбран для редактирования.
export const getSeminarForEdit = (state) => {
  return state.seminarsList.seminarForEdit;
};

// Функция-селектор для получения состояния, открыто ли модальное окно.
export const getIsModalOpen = (state) => {
  return state.seminarsList.isModalOpen;
};

export const getLoading = (state) => {
  return state.seminarsList.loading;
};

export const getError = (state) => {
  return state.seminarsList.error;
};
