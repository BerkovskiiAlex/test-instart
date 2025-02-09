/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Импортируем функции из Redux для работы с состоянием
import {
  fetchSeminarsThunk,
  deleteSeminarThunk,
} from "../../Redux/seminars/operations"; // Операции для работы с семинарами в Redux
import { getSeminars, getIsModalOpen } from "../../Redux/seminars/selectors"; // Селекторы для доступа к данным из Redux
import {
  setIsModalOpen,
  setSeminarForEdit,
} from "../../Redux/seminars/seminarsSlice"; // Слайс для управления состоянием семинаров
import Modal from "../../components/Modal/Modal"; // Модальный компонент для редактирования
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
} from "./Home.styled"; // Стили для компонента

export const Home = () => {
  const dispatch = useDispatch(); // Dispatch для отправки действий в Redux
  const seminars = useSelector(getSeminars); // Селектор для получения списка семинаров
  const isModalOpen = useSelector(getIsModalOpen); // Селектор для контроля состояния модального окна

  const [showModal, setShowModal] = useState(false); // Локальное состояние для отображения модального окна подтверждения удаления
  const [seminarToDelete, setSeminarToDelete] = useState(null); // Локальное состояние для хранения ID семинара, который нужно удалить

  // Хук useEffect, который загружает данные о семинарах при монтировании компонента
  useEffect(() => {
    dispatch(fetchSeminarsThunk()); // Диспатчим action для загрузки семинаров
  }, [dispatch]);

  const handleDelete = (id) => {
    setSeminarToDelete(id); // Устанавливаем ID семинара, который будем удалять
    setShowModal(true); // Показываем модальное окно подтверждения удаления
  };

  const confirmDelete = () => {
    if (seminarToDelete) {
      dispatch(deleteSeminarThunk(seminarToDelete)); // Отправляем action для удаления семинара
    }
    setShowModal(false); // Закрываем модальное окно после удаления
  };

  // Функция для отмены удаления
  const cancelDelete = () => {
    setShowModal(false); // Просто закрываем модальное окно, не удаляя семинар
  };

  const handleEdit = (seminar) => {
    dispatch(setSeminarForEdit(seminar)); // Устанавливаем семинар, который нужно редактировать
    dispatch(setIsModalOpen(true)); // Открываем модальное окно для редактирования
  };

  return (
    <StyledHomeSection>
      {/* Заголовок страницы */}
      <StyledHomeHeader>
        <StyledHomeH1>
          Добро пожаловать в тестовое задание Берковского Алексея для компании
          ITStart.
        </StyledHomeH1>
      </StyledHomeHeader>
      {/* Список всех семинаров */}
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
                    handleEdit(seminar); // Обработчик для редактирования
                  }}
                  aria-label={`Редактировать семинар ${seminar.title}`}
                >
                  Редактировать
                </StyledHomeContentEditButton>
                <StyledHomeContentDeleteButton
                  onClick={() => {
                    handleDelete(seminar.id); // Обработчик для удаления
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
      {/* Модальное окно подтверждения удаления */}
      {showModal && (
        <StyledHomeModalDiv>
          <StyledHomeModalContentDiv>
            <StyledHomeModalContentH3>
              Вы уверены, что хотите удалить этот семинар?
            </StyledHomeModalContentH3>
            <StyledHomeModalContentButtonDiv>
              <StyledHomeModalContentYesButton
                onClick={() => {
                  confirmDelete(); // Подтверждение удаления
                }}
              >
                Да
              </StyledHomeModalContentYesButton>
              {/* Отмена удаления */}
              <StyledHomeModalContentNoButton onClick={cancelDelete}>
                Нет
              </StyledHomeModalContentNoButton>
            </StyledHomeModalContentButtonDiv>
          </StyledHomeModalContentDiv>
        </StyledHomeModalDiv>
      )}
      {/* Если модальное окно для редактирования открыто, рендерим компонент Modal */}
      {isModalOpen && <Modal />}
    </StyledHomeSection>
  );
};
