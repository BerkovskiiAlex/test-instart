/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSeminarsThunk,
  deleteSeminarThunk,
} from "../../Redux/seminars/operations";
import { getSeminars, getIsModalOpen } from "../../Redux/seminars/selectors";
import {
  setIsModalOpen,
  setSeminarForEdit,
} from "../../Redux/seminars/seminarsSlice";
import Modal from "../../components/Modal/Modal";
import {
  StyledHomeContentDiv,
  StyledHomeH1,
  StyledHomeContentH2,
  StyledHomeHeader,
  StyledHomeImg,
  StyledHomeLi,
  StyledHomeSection,
  StyledHomeUl,
  StyledHomeContentP,
  StyledHomeContentButtonDiv,
  StyledHomeContentDeleteButton,
  StyledHomeContentEditButton,
  StyledHomeModalContentYesButton,
  StyledHomeModalContentNoButton,
  StyledHomeModalDiv,
  StyledHomeModalContentDiv,
  StyledHomeModalContentH3,
  StyledHomeModalContentButtonDiv,
} from "./Home.styled";

export const Home = () => {
  const dispatch = useDispatch();
  const seminars = useSelector(getSeminars);
  const isModalOpen = useSelector(getIsModalOpen);

  const [showModal, setShowModal] = useState(false);
  const [seminarToDelete, setSeminarToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchSeminarsThunk());
  }, [dispatch]);

  const handleDelete = (id) => {
    setSeminarToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (seminarToDelete) {
      dispatch(deleteSeminarThunk(seminarToDelete));
    }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const handleEdit = (seminar) => {
    dispatch(setSeminarForEdit(seminar));
    dispatch(setIsModalOpen(true));
  };

  return (
    <StyledHomeSection>
      <StyledHomeHeader>
        <StyledHomeH1>
          Добро пожаловать в тестовое задание Берковского Алексея для компании
          ITStart.
        </StyledHomeH1>
      </StyledHomeHeader>
      <StyledHomeUl>
        {seminars.map((seminar) => (
          <StyledHomeLi key={seminar.id}>
            <StyledHomeImg
              src={seminar.photo}
              alt={`Фото семинара ${seminar.title}`}
            ></StyledHomeImg>
            <StyledHomeContentDiv>
              <StyledHomeContentH2>{seminar.title}</StyledHomeContentH2>
              <StyledHomeContentP>{seminar.description}</StyledHomeContentP>
              <StyledHomeContentP>Дата: {seminar.date}</StyledHomeContentP>
              <StyledHomeContentP>Время: {seminar.time}</StyledHomeContentP>
              <StyledHomeContentButtonDiv>
                <StyledHomeContentEditButton
                  onClick={() => {
                    handleEdit(seminar);
                  }}
                  aria-label={`Редактировать семинар ${seminar.title}`}
                >
                  Редактировать
                </StyledHomeContentEditButton>
                <StyledHomeContentDeleteButton
                  onClick={() => {
                    handleDelete(seminar.id);
                  }}
                  aria-label={`Удалить семинар ${seminar.title}`}
                >
                  Удалить
                </StyledHomeContentDeleteButton>
              </StyledHomeContentButtonDiv>
            </StyledHomeContentDiv>
          </StyledHomeLi>
        ))}
      </StyledHomeUl>
      {showModal && (
        <StyledHomeModalDiv>
          <StyledHomeModalContentDiv>
            <StyledHomeModalContentH3>
              Вы уверены, что хотите удалить этот семинар?
            </StyledHomeModalContentH3>
            <StyledHomeModalContentButtonDiv>
              <StyledHomeModalContentYesButton
                onClick={() => {
                  confirmDelete();
                }}
              >
                Да
              </StyledHomeModalContentYesButton>
              <StyledHomeModalContentNoButton onClick={cancelDelete}>
                Нет
              </StyledHomeModalContentNoButton>
            </StyledHomeModalContentButtonDiv>
          </StyledHomeModalContentDiv>
        </StyledHomeModalDiv>
      )}
      {isModalOpen && <Modal />}
    </StyledHomeSection>
  );
};
