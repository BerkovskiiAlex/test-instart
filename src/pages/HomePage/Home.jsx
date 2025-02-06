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
import "./Home.css";

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
    <section>
      <h2>Семинары</h2>
      <ul>
        {seminars.map((seminar) => (
          <li key={seminar.id}>
            <h3>{seminar.title}</h3>
            <p>{seminar.description}</p>
            <p>Дата: {seminar.date}</p>
            <p>Время: {seminar.time}</p>
            <img src={seminar.photo} alt={seminar.title}></img>
            <button
              onClick={() => {
                handleDelete(seminar.id);
              }}
              aria-label={`Удалить семинар ${seminar.title}`}
            >
              Удалить
            </button>
            <button
              onClick={() => {
                handleEdit(seminar);
              }}
              aria-label={`Редактировать семинар ${seminar.title}`}
            >
              Редактировать
            </button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Вы уверены, что хотите удалить этот семинар?</h3>
            <button
              onClick={() => {
                confirmDelete();
              }}
            >
              Да
            </button>
            <button onClick={cancelDelete}>Нет</button>
          </div>
        </div>
      )}
      {isModalOpen && <Modal />}
    </section>
  );
};
