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
  const seminarForEdit = useSelector(getSeminarForEdit);
  const [editedSeminar, setEditedSeminar] = useState({});

  useEffect(() => {
    if (seminarForEdit) {
      setEditedSeminar(seminarForEdit);
    }
  }, [seminarForEdit]);

  const handleClose = () => {
    dispatch(setIsModalClose());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSeminar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateSeminarThunk(editedSeminar));
    dispatch(setIsModalClose());
  };

  return (
    <StyledModalSection>
      <StyledCloseIcon onClick={handleClose} />
      {seminarForEdit && (
        <StyledModalDiv>
          <StyledModalH3>Редактирование семинара</StyledModalH3>
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
            <StyledModalButtonDiv>
              <StyledModalSaveButton type="button" onClick={handleSave}>
                Сохранить
              </StyledModalSaveButton>
              <StyledModalCancelButton type="button" onClick={handleClose}>
                Отмена
              </StyledModalCancelButton>
            </StyledModalButtonDiv>
          </StyledModalForm>
        </StyledModalDiv>
      )}
    </StyledModalSection>
  );
};
