import styled from "styled-components";
import { Link } from "react-scroll";

export const QuestionSection = styled.section`
  padding-top: 36px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const QuestionList = styled.ul`
  @media screen and (min-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;
  margin-top: 36px;
  h3 {
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.04em;
    text-align: justify;
    @media screen and (min-width: 1280px) {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 768px) {
    justify-content: end;
  }
`;
export const QuestionBox = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    column-gap: 185px;
  }
  h2 {
    width: 230px;
    font-family: "Oswald-Regular";
    font-size: 28px;
    line-height: 100%;
    text-transform: uppercase;

    padding-bottom: 24px;

    @media screen and (min-width: 768px) {
      width: 300px;
      font-size: 36px;
      padding-bottom: 0;
    }
    @media screen and (min-width: 1280px) {
      width: 350px;
      font-size: 48px;
    }
  }
`;

export const ContactButton = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;

  font-size: 16px;
  letter-spacing: -0.04em;

  width: 130px;
  height: 39px;
  color: ${({ theme }) => theme.color.garkGreen};
  border-radius: 500px;
  padding: 10px 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.color.whiteGreen};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #173d33;
    color: #97d28b;
  }

  svg {
    background-color: black;
    border-radius: 50%;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 500ms cubic-bezier(0.4, 0, 0.2, 1);

    margin-left: 12px;
  }
  &:hover svg {
    stroke: black;
    fill: none;
    background-color: ${({ theme }) => theme.color.whiteGreen};
  }
`;
