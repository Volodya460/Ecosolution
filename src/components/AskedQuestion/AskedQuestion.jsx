import { Container } from "../Container/Container";
import { Element } from "react-scroll";
import {
  ButtonDiv,
  ContactButton,
  QuestionBox,
  QuestionList,
  QuestionSection,
} from "./AskedQuestion.styled";
import inf from "../../data/inf.json";
import { QuestionCard } from "./QuesionCard";
import Icons from "../../images/sprite.svg";

export const AskedQuestion = () => {
  return (
    <Element name="question">
      {" "}
      <QuestionSection>
        <Container>
          <QuestionBox>
            {" "}
            <h2>Frequently Asked Questions</h2>
            <QuestionList>
              {inf.map((el) => {
                return <QuestionCard el={el} key={el.id} />;
              })}
            </QuestionList>
            <ButtonDiv>
              <h3>Didnt find the answer to your question?</h3>
              <ContactButton to="contact" smooth={true} duration={500}>
                Contact Us
                <svg width="14px" height="14px" aria-labelledby="add">
                  <use href={Icons + "#icon-arrow-rightdown"}></use>
                </svg>
              </ContactButton>
            </ButtonDiv>
          </QuestionBox>
        </Container>
      </QuestionSection>
    </Element>
  );
};
