import { useEffect } from "react";
import PropTypes from "prop-types";

import { createPortal } from "react-dom";
import {
  ButtonDiv,
  LinkStyle,
  MenuList,
  ModalWindow,
  Overlay,
  SocialBox,
} from "./Modal.styled";
import Icons from "../../images/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ closeModal }) => {
  useEffect(() => {
    const closeEscModal = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", closeEscModal);
    return () => {
      window.removeEventListener("keydown", closeEscModal);
    };
  }, [closeModal]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <div>
      <Overlay onClick={handleBackDropClick}>
        <ModalWindow>
          <div>
            {" "}
            <ButtonDiv>
              <button type="button" onClick={closeModal}>
                <svg
                  width="10px"
                  height="10px"
                  aria-labelledby="arrow-up_right"
                >
                  <use href={Icons + "#icon-Vectorclose"}></use>
                </svg>
                close
              </button>
            </ButtonDiv>
            <MenuList>
              <li>
                <LinkStyle to="main" smooth={true} duration={500}>
                  Main
                  <svg
                    width="16px"
                    height="16px"
                    aria-labelledby="arrow-up_right"
                  >
                    <use href={Icons + "#icon-arrow-up_right"}></use>
                  </svg>
                </LinkStyle>
              </li>
              <li>
                <LinkStyle to="about" smooth={true} duration={500}>
                  {" "}
                  About
                  <svg
                    width="16px"
                    height="16px"
                    aria-labelledby="arrow-up_right"
                  >
                    <use href={Icons + "#icon-arrow-up_right"}></use>
                  </svg>
                </LinkStyle>
              </li>
              <li>
                <LinkStyle to="case" smooth={true} duration={500}>
                  {" "}
                  Cases
                  <svg
                    width="16px"
                    height="16px"
                    aria-labelledby="arrow-up_right"
                  >
                    <use href={Icons + "#icon-arrow-up_right"}></use>
                  </svg>
                </LinkStyle>
              </li>
              <li>
                <LinkStyle to="question" smooth={true} duration={500}>
                  {" "}
                  FAQ
                  <svg
                    width="16px"
                    height="16px"
                    aria-labelledby="arrow-up_right"
                  >
                    <use href={Icons + "#icon-arrow-up_right"}></use>
                  </svg>
                </LinkStyle>
              </li>
              <li>
                <LinkStyle to="contact" smooth={true} duration={500}>
                  {" "}
                  Contact Us
                  <svg
                    width="16px"
                    height="16px"
                    aria-labelledby="arrow-up_right"
                  >
                    <use href={Icons + "#icon-arrow-up_right"}></use>
                  </svg>
                </LinkStyle>
              </li>
            </MenuList>
          </div>

          <SocialBox>
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
          </SocialBox>
        </ModalWindow>
      </Overlay>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
};
