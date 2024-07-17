import Icons from "../../images/sprite.svg";
import { Container } from "../Container/Container";
import {
  Address,
  Button,
  RenewableBox,
  RenewableDiv,
  RenewableSection,
  TextDiv,
} from "./Renewable.styled";

export const Renewable = () => {
  return (
    <RenewableSection>
      <Container>
        <RenewableBox>
          <RenewableDiv>
            <h2>RENEWABLE ENERGY For any task</h2>
            <TextDiv>
              <p>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </p>
              <Button to="case" smooth={true} duration={500}>
                Learn more
                <span>
                  <svg width="16px" height="17px" aria-labelledby="arrow-right">
                    <use href={Icons + "#icon-arrow-right"}></use>
                  </svg>
                </span>
              </Button>
            </TextDiv>
          </RenewableDiv>
          <Address>
            <li>
              <address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</address>
            </li>
            <li>
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
              <p>ecosolution © 2023</p>
            </li>
          </Address>
        </RenewableBox>
      </Container>
    </RenewableSection>
  );
};
