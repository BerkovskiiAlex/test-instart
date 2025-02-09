/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalClose } from "../../Redux/seminars/seminarsSlice";
import { getSeminarForEdit } from "../../Redux/seminars/selectors";
import { updateSeminarThunk } from "../../Redux/seminars/operations";
import {
  StyledCloseIcon,
  StyledModalSection,
  StyledModalDiv,
  StyledModalH3,
  StyledModalForm,
  StyledModalLabel,
  StyledModalTextarea,
  StyledModalCancelButton,
  StyledModalSaveButton,
  StyledModalButtonDiv,
} from "./ModalForm.styled";

export const ModalForm = () => {
  const dispatch = useDispatch();
  const seminarForEdit = useSelector(getSeminarForEdit); // Семинар для редактирования из Redux
  const [editedSeminar, setEditedSeminar] = useState({}); // Локальное состояние для хранения редактируемого семинара

  // Хук useEffect используется для инициализации состояния при изменении seminarForEdit
  useEffect(() => {
    if (seminarForEdit) {
      // Если seminarForEdit существует, обновляем локальное состояние с его значениями
      setEditedSeminar(seminarForEdit);
    }
  }, [seminarForEdit]); // Зависимость от seminarForEdit, чтобы обновить состояние при изменении

  // Функция для закрытия модального окна.
  const handleClose = () => {
    dispatch(setIsModalClose());
  };

  // Обработчик изменений в полях формы.
  const handleChange = (e) => {
    const { name, value } = e.target; // Деструктурируем имя поля и его значение.
    setEditedSeminar((prevState) => ({
      ...prevState, // Сохраняем предыдущие данные и обновляем только измененное поле.
      [name]: value,
    }));
  };

  // Функция для сохранения изменений семинара.
  const handleSave = () => {
    dispatch(updateSeminarThunk(editedSeminar)); // Отправляем асинхронный экшен для обновления семинара.
    dispatch(setIsModalClose());
  };

  return (
    <StyledModalSection>
      {/* svg для закрытия модального окна */}
      <StyledCloseIcon onClick={handleClose} />
      {seminarForEdit && ( // Проверяем существует ли семинар для редактирования
        <StyledModalDiv>
          <StyledModalH3>Редактирование семинара</StyledModalH3>
          {/* Форма для редактирования семинара */}
          <StyledModalForm>
            <StyledModalLabel>
              Название:
              <StyledModalTextarea
                name="title"
                value={editedSeminar.title || ""}
                onChange={handleChange}
                placeholder="Введите текст..."
              />
            </StyledModalLabel>
            <StyledModalLabel>
              Описание:
              <StyledModalTextarea
                name="description"
                value={editedSeminar.description || ""}
                onChange={handleChange}
                placeholder="Введите текст..."
              />
            </StyledModalLabel>
            <StyledModalLabel>
              Дата:
              <input
                type="text"
                name="date"
                value={editedSeminar.date || ""}
                onChange={handleChange}
                placeholder="Введите дату..."
              />
            </StyledModalLabel>
            <StyledModalLabel>
              Время:
              <input
                type="text"
                name="time"
                value={editedSeminar.time || ""}
                onChange={handleChange}
                placeholder="Введите время..."
              />
            </StyledModalLabel>
            <StyledModalLabel>
              Ссылка на фото:
              <input
                type="text"
                name="photo"
                value={editedSeminar.photo || ""}
                onChange={handleChange}
                placeholder="Введите ссылку на фото..."
              />
            </StyledModalLabel>
            {/* Контейнер для кнопок подтверждения и отмены редактирования */}
            <StyledModalButtonDiv>
              <StyledModalSaveButton
                type="button"
                onClick={handleSave}
                aria-label={`Сохранить изменения`}
              >
                Сохранить
              </StyledModalSaveButton>
              <StyledModalCancelButton
                type="button"
                onClick={handleClose}
                aria-label={`Отменить изменения`}
              >
                Отмена
              </StyledModalCancelButton>
            </StyledModalButtonDiv>
          </StyledModalForm>
        </StyledModalDiv>
      )}
    </StyledModalSection>
  );
};
