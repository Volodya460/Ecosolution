import styled from "styled-components";
import { Link } from "react-scroll";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 3;
  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;

export const ModalWindow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 4;
  top: 20px;
  right: 40px;
  width: calc(100% - 40px - 40px);
  min-height: 360px;
  max-height: calc(100vh - 60px);

  padding: 24px;
  color: white;

  backdrop-filter: blur(25px);
  background: rgba(23, 61, 51, 0.75);

  border-radius: 25px;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 701px;
    right: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    height: 873px;
  }
`;

export const ButtonDiv = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 8px;
  button {
    font-size: 20px;
    letter-spacing: -0.04em;
    color: #fff;

    border: none;
    background-color: inherit;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &focus {
      color: ${({ theme }) => theme.color.whiteGreen};
    }
    &:hover svg {
      stroke: ${({ theme }) => theme.color.whiteGreen};
    }

    svg {
      stroke: white;
      margin-right: 10px;

      transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;
  margin-top: 24px;
`;

export const SocialBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    display: flex;
    align-items: center;
  }

  svg {
    fill: none;
    stroke: white;
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 24px;
  letter-spacing: -0.04em;
  color: #fff;
  gap: 8px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.whiteGreen};
  }

  svg {
    stroke: white;
    fill: none;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg {
    stroke: ${({ theme }) => theme.color.whiteGreen};
  }
  &:focus svg {
    stroke: ${({ theme }) => theme.color.whiteGreen};
  }
`;
