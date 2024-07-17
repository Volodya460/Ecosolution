import { Container } from "../Container/Container";
import { Element } from "react-scroll";
import Icons from "../../images/sprite.svg";
import {
  MainUl,
  MainValuesSection,
  MainUlItem,
  MainUlItemImage1,
  MainUlItemImage2,
} from "./About.styled";
import image_1_2x from "../../images/about@2x.jpg";
import image_1_3x from "../../images/about@3x.jpg";
import image_2_2x from "../../images/about_2@2x.jpg";
import image_2_3x from "../../images/about_2@3x.jpg";

export const MainValues = () => {
  return (
    <Element name="about">
      {" "}
      <MainValuesSection>
        <Container>
          <MainUl>
            <MainUlItem>
              <h3>
                <svg
                  width="16px"
                  height="16px"
                  aria-labelledby="maximize-circle"
                >
                  <use href={Icons + "#icon-maximize-circle"}></use>
                </svg>
                Openness
              </h3>
              <p>to the world, people, new ideas and projects</p>
            </MainUlItem>
            <MainUlItem>
              <h3>
                <svg width="16px" height="16px" aria-labelledby="global-edit">
                  <use href={Icons + "#icon-global-edit"}></use>
                </svg>
                Responsibility
              </h3>
              <p>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </MainUlItem>
            <MainUlItemImage1>
              {" "}
              <picture>
                <source
                  srcSet={image_1_2x}
                  media="(min-width:768px) and (max-width:1279.99px)"
                />
                <source srcSet={image_1_3x} media="(min-width:1280px)" />
                <img src={image_1_2x} alt="work" width="342px" />
              </picture>
            </MainUlItemImage1>

            <MainUlItemImage2>
              {" "}
              <picture>
                <source
                  srcSet={image_2_2x}
                  media="(min-width:768px) and (max-width:1279.99px)"
                />
                <source srcSet={image_2_3x} media="(min-width:1280px)" />
                <img src={image_2_2x} alt="work" width="342px" />
              </picture>
            </MainUlItemImage2>
            <MainUlItem>
              <h3>
                <svg width="16px" height="16px" aria-labelledby="charge">
                  <use href={Icons + "#icon-cpu-charge"}></use>
                </svg>
                Innovation
              </h3>
              <p>
                we use the latest technology to implement non-standard solutions
              </p>
            </MainUlItem>
            <MainUlItem>
              <h3>
                <svg width="16px" height="16px" aria-labelledby="ranking">
                  <use href={Icons + "#icon-ranking"}></use>
                </svg>
                Quality
              </h3>
              <p>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </MainUlItem>
          </MainUl>
        </Container>
      </MainValuesSection>
    </Element>
  );
};
