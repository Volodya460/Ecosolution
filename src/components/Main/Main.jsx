import { Container } from "../Container/Container";
import { Element } from "react-scroll";
import { MainH2, ImageDiv, Text, MainSection, TextDiv } from "./Main.styled";
import image from "../../images/main_photo.jpg";
import image2x from "../../images/main_photo@2x.jpg";
import image3x from "../../images/main_photo@3x.jpg";
export const Main = () => {
  return (
    <Element name="main">
      <MainSection>
        <Container>
          <ImageDiv>
            <picture>
              <source srcSet={image} media="(max-width:767.99px)" />
              <source
                srcSet={image2x}
                media="(min-width:768px) and (max-width:1279.99px)"
              />
              <source srcSet={image3x} media="(min-width:1280px)" />
              <img src={image} alt="energy" width="319px" />
            </picture>
          </ImageDiv>
          <TextDiv>
            <MainH2>Main values of our company</MainH2>
            <Text>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the worlds energy needs.
            </Text>
          </TextDiv>
        </Container>
      </MainSection>
    </Element>
  );
};
