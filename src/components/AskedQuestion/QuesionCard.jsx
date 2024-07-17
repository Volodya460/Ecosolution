import Icons from "../../images/sprite.svg";
import PropTypes from "prop-types";
import {
  AnswerBox,
  QuestionDiv,
  QuestionItem,
  SvgMinus,
} from "./QuestionCard.styled";
import { useState } from "react";

export const QuestionCard = ({ el }) => {
  const [answerShow, setAswerShow] = useState(() => {
    if (el.id === 1) {
      return true;
    }
  });
  const { question, answer } = el;

  return (
    <QuestionItem key={el.id}>
      <QuestionDiv>
        <button onClick={() => setAswerShow((prev) => !prev)}>
          {!answerShow ? (
            <svg width="16px" height="16px" aria-labelledby="add">
              <use href={Icons + "#icon-add"}></use>
            </svg>
          ) : (
            <SvgMinus width="16px" height="16px" aria-labelledby="minus">
              <use href={Icons + "#icon-minus"}></use>
            </SvgMinus>
          )}
        </button>
        <p>{question}</p>
      </QuestionDiv>
      {answerShow ? <AnswerBox>{answer}</AnswerBox> : null}
    </QuestionItem>
  );
};

QuestionCard.propTypes = {
  el: PropTypes.object,
};
