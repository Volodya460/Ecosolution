import { Container } from "../Container/Container";
import Icons from "../../images/sprite.svg";
import {
  AdressList,
  ButtonDiv,
  FooterBox,
  FooterButton,
  FooterNavBox,
  LogoDiv,
  SocialList,
} from "./Footer.styled";
export const Footer = () => {
  return (
    <Container>
      <FooterBox>
        <FooterNavBox>
          {" "}
          <LogoDiv>
            <a href="./" aria-label="Log-site">
              <svg width="269px" height="40px" aria-labelledby="logo">
                <use href={Icons + "#icon-Group-1Logo"}></use>
              </svg>
            </a>
          </LogoDiv>
          <ButtonDiv>
            <FooterButton to="main" smooth={true} duration={500}>
              <svg width="16px" height="16px" aria-labelledby="arrow-up">
                <use href={Icons + "#icon-arrow-up"}></use>
              </svg>
            </FooterButton>
          </ButtonDiv>
          <SocialList>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24px" height="24px" aria-hidden="true">
                  <use href={Icons + "#icon-facebook"}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24px" height="24px" aria-hidden="true">
                  <use href={Icons + "#icon-instagram"}></use>
                </svg>
              </a>
            </li>
          </SocialList>
        </FooterNavBox>

        <AdressList>
          <li>
            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          </li>
          <li>
            <p>office@ecosolution.com</p>
          </li>
          <li>
            <p>ecosolution © 2023</p>
          </li>
        </AdressList>
      </FooterBox>
    </Container>
  );
};
