import { useEffect, useState } from "react";
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
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsClosing(true);
        setTimeout(() => {
          closeModal();
          setIsClosing(false);
        }, 300);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  return createPortal(
    <div>
      <Overlay onClick={handleBackDropClick}>
        <ModalWindow $isClosing={isClosing}>
          <div>
            {" "}
            <ButtonDiv>
              <button type="button" onClick={handleClose}>
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
