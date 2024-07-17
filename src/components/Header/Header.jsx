import { useState, useEffect } from "react";
import Icons from "../../images/sprite.svg";
import { Container } from "../Container/Container";
import {
  Nav,
  HeaderBox,
  ButtonMenu,
  ButtonBox,
  ButtonTouch,
} from "./Header.styled";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("inherit");

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setHeaderColor("#fff");
    } else {
      setHeaderColor("inherit");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = "visible";
  };
  return (
    <HeaderBox $backgroundColor={headerColor}>
      {" "}
      <Container>
        <Nav>
          <a href="./" aria-label="Log-site">
            {" "}
            <svg width="269px" height="40px" aria-labelledby="logo">
              <use href={Icons + "#icon-Group-1Logo"}></use>
            </svg>
          </a>
          <ButtonBox>
            <ButtonMenu onClick={openModal}>
              <svg width="16px" height="17px" aria-labelledby="menu">
                {" "}
                <use href={Icons + "#icon-menumenu"}></use>
              </svg>
            </ButtonMenu>
            <ButtonTouch to="contact" smooth={true} duration={500}>
              Get in touch
              <svg width="14px" height="14px" aria-labelledby="add">
                <use href={Icons + "#icon-arrow-rightdown"}></use>
              </svg>
            </ButtonTouch>
          </ButtonBox>
        </Nav>
      </Container>
      {open && <Modal closeModal={closeModal} />}
    </HeaderBox>
  );
};
