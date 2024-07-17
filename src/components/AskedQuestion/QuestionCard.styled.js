import styled from "styled-components";

export const QuestionItem = styled.li`
  padding-top: 17px;
  padding-bottom: 17px;

  border-top: 1px solid ${({ theme }) => theme.color.whiteGreen};

  @media screen and (min-width: 1280px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const QuestionDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  letter-spacing: -0.04em;
  text-align: justify;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const AnswerBox = styled.span`
  display: block;
  padding-top: 16px;
  padding-left: 25px;

  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.04em;
  text-align: justify;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const SvgMinus = styled.svg`
  stroke: black;
  fill: none;
`;
