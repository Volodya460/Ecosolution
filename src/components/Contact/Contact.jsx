import { Container } from "../Container/Container";
import { Element } from "react-scroll";
import {
  AddressBox,
  ContactBox,
  ContactSection,
  EmailBox,
  InfoBox,
  PhoneList,
  SocialBox,
} from "./Contact.styled";
import Icons from "../../images/sprite.svg";
import { Form } from "./Form/Form";

export const Contact = () => {
  return (
    <Element name="contact">
      {" "}
      <ContactSection>
        <Container>
          <h2>Contact us</h2>
          <InfoBox>
            <ContactBox>
              <p>Phone:</p>
              <PhoneList>
                <li>
                  <a href="tel:380981234567" aria-label="38 (098) 12 34 567">
                    <svg width="24px" height="24px" aria-hidden="true">
                      <use href={Icons + "#icon-call"}></use>
                    </svg>
                    38 (098) 12 34 567
                  </a>
                </li>
                <li>
                  <a href="tel:+380931234567" aria-label="38 (093) 12 34 567">
                    <svg width="24px" height="24px" aria-hidden="true">
                      <use href={Icons + "#icon-call"}></use>
                    </svg>
                    38 (093) 12 34 567
                  </a>
                </li>
              </PhoneList>
              <EmailBox>
                <p>E-mail:</p>
                <a
                  href="mailto:office@ecosolution.com"
                  aria-label="office@ecosolution.com"
                >
                  <svg width="24px" height="24px" aria-hidden="true">
                    <use href={Icons + "#icon-sms"}></use>
                  </svg>
                  office@ecosolution.com
                </a>
              </EmailBox>

              <AddressBox>
                <p>Address:</p>
                <address>
                  <svg width="24px" height="24px" aria-hidden="true">
                    <use href={Icons + "#icon-map"}></use>
                  </svg>
                  79005, Ukraine, Lvivstreet.<br></br> Shota Rustaveli, 7
                </address>
              </AddressBox>
              <SocialBox>
                <p>Social Networks:</p>
                <ul>
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
                </ul>
              </SocialBox>
            </ContactBox>
            <Form />
          </InfoBox>
        </Container>
      </ContactSection>
    </Element>
  );
};
