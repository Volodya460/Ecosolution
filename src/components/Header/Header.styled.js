import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: ${(props) => props.$backgroundColor};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 36px;

  @media screen and (min-width: 1280px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background.green};
  border-radius: 50%;
  padding: 4px 12px;
  width: 40px;
  height: 39px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.whiteGreen};
  }
  svg {
    stroke: black;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonTouch = styled(Link)`
  display: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;

    font-size: 16px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.color.garkGreen};

    width: 140px;
    height: 39px;
    border-radius: 500px;
    padding: 10px 16px;

    background-color: ${({ theme }) => theme.color.whiteGreen};

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #173d33;
      color: #97d28b;
    }

    svg {
      margin-left: 12px;

      background-color: black;
      border-radius: 50%;
      transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover svg {
      stroke: black;
      fill: none;
      background-color: ${({ theme }) => theme.color.whiteGreen};
    }

    &:focus svg {
      stroke: black;
      fill: none;
      background-color: ${({ theme }) => theme.color.whiteGreen};
    }
  }
`;
