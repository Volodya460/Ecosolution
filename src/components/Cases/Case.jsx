import { Container } from "../Container/Container";
import { Element } from "react-scroll";
import { SwiperCase } from "./Swiper/SwiperCase";
import data from "../../data/electricity.json";
import { CaseSection } from "./Case.styled";
export const Case = () => {
  return (
    <Element name="case">
      {" "}
      <CaseSection>
        <Container>
          <SwiperCase arr={data} />
        </Container>
      </CaseSection>
    </Element>
  );
};
