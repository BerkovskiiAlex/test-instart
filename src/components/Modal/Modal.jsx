/** @format */

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "./Modal.styled";
import { useDispatch } from "react-redux";
import { setIsModalClose } from "../../Redux/seminars/seminarsSlice";
import { ModalForm } from "../ModalForm/ModalForm";

// Селектор для целевого элемента в DOM, куда будем рендерить модальное окно
const modalRoot = document.querySelector("#modal-root");

const Modal = () => {
  const dispatch = useDispatch(); // Dispatch для отправки действий в Redux

  // Хук useEffect для управления поведением модального окна
  useEffect(() => {
    // Блокируем прокрутку страницы, когда модальное окно открыто
    document.body.style.overflow = "hidden";

    // Обработчик для закрытия модального окна при нажатии на клавишу Escape
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        dispatch(setIsModalClose()); // Закрываем модальное окно, вызывая действие Redux
      }
    };
    // Обработчик события нажатия клавиши
    window.addEventListener("keydown", handleEscape);
    // Очистка эффекта (удаляем обработчик и восстанавливаем прокрутку) при размонтировании компонента
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [dispatch]);

  // Используем createPortal для рендеринга модального окна вне обычного DOM-дерева
  return createPortal(
    <ModalOverlay
      onClick={(e) => {
        // Закрытие модального окна при клике по overlay (фон)
        if (e.target === e.currentTarget) {
          dispatch(setIsModalClose());
        }
      }}
    >
      {/* Внутри модального окна рендерим компонент формы */}
      <ModalForm />
    </ModalOverlay>,
    // Указываем целевой элемент в DOM, куда будет добавлен портал
    modalRoot
  );
};

export default Modal;
