import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 20px;

  font-size: 16px;
  letter-spacing: -0.04em;

  border-top: 1px solid ${({ theme }) => theme.color.whiteGreen};

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
export const FooterNavBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 1/2;
`;
export const FooterButton = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.whiteGreen};
  padding: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #173d33;
  }

  svg {
    stroke: black;
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

export const ButtonDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  grid-column: 2/3;
  @media screen and (min-width: 768px) {
    grid-column: 3/4;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  grid-column: span 2;
  grid-row: 2/3;

  a {
    display: flex;
    align-items: center;

    &:hover svg {
      stroke: ${({ theme }) => theme.color.whiteGreen};
    }
    &:focus svg {
      stroke: ${({ theme }) => theme.color.whiteGreen};
    }
  }
  svg {
    stroke: black;
    fill: none;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1;
    justify-content: start;
    padding-left: 20px;
  }
`;

export const AdressList = styled.ul`
  display: grid;
  align-items: center;
  text-align: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 0px;
    text-align: start;

    li:nth-last-child(1) {
      text-align: end;
    }

    li:nth-child(2) {
      padding-left: 20px;
    }
  }
`;
