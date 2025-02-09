/** @format */

import { styled } from "styled-components";

export const StyledHomeSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(48, 59, 68);
  border-radius: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    max-width: 748px;
  }
  @media screen and (max-width: 767px) {
    max-width: 310px;
    border-radius: 10px;
  }
`;

export const StyledHomeHeader = styled.header`
  padding: 40px 110px;
  font-size: 40px;
  text-align: center;
  background-color: rgb(48, 59, 68);
  border-radius: 18px 18px 0 0;
  @media screen and (max-width: 767px) {
    padding: 10px 20px;
    font-size: 24px;
    max-width: 310px;
    border-radius: 8px;
  }
`;

export const LoadingSpinner = styled.div`
  border: 30px solid #f3f3f3;
  border-top: 30px solid #3498db;
  border-radius: 50%;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 280px;
  }
`;

export const StyledHomeError = styled.div`
  text-align: center;
  padding: 60px;
  font-size: 60px;
  color: red;
`;

export const StyledHomeH1 = styled.h1`
  color: rgb(255, 255, 255);
`;

export const StyledHomeUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 24px 40px 0;
  padding-bottom: 24px;
  gap: 28px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 52px;
  }
  @media screen and (max-width: 767px) {
    margin: 24px 14px 0;
    gap: 52px;
  }
`;

export const StyledHomeLi = styled.li`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const StyledHomeImg = styled.img`
  width: 400px;
  height: 400px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 708px;
    height: 708px;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 280px;
  }
`;

export const StyledHomeContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 12px;
  }
  @media screen and (max-width: 767px) {
    gap: 8px;
  }
`;

export const StyledHomeContentH2 = styled.h2`
  font-size: 28px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const StyledHomeContentP = styled.p`
  font-size: 18px;
  width: 598px;
  @media screen and (max-width: 767px) {
    width: 280px;
    font-size: 12px;
  }
`;

export const StyledHomeContentButtonDiv = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 24px;
  @media screen and (max-width: 767px) {
    gap: 16px;
  }
`;

export const StyledHomeContentDeleteButton = styled.button`
  background-color: rgb(244 67 54);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  &:hover {
    background-color: rgb(211 47 47);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 767px) {
    padding: 6px;
    font-size: 10px;
    border-radius: 4px;
  }
`;

export const StyledHomeContentEditButton = styled.button`
  background-color: rgb(255 202 40);
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(255 179 0);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 767px) {
    padding: 6px;
    font-size: 10px;
    border-radius: 4px;
  }
`;

export const StyledHomeModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHomeModalContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  gap: 12px;
  @media screen and (max-width: 767px) {
    width: 260px;
    margin: 0 10px;
  }
`;

export const StyledHomeModalContentH3 = styled.h3`
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const StyledHomeModalContentButtonDiv = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 40px;
  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`;

export const StyledHomeModalContentYesButton = styled.button`
  background-color: rgb(76 175 80);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(69 160 73);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
    border-radius: 4px;
  }
`;

export const StyledHomeModalContentNoButton = styled.button`
  background-color: rgb(244 67 54);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 4px;
  &:hover {
    background-color: rgb(211 47 47);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
    border-radius: 4px;
  }
`;
