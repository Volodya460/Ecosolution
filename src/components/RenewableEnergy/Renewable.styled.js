import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  color: ${({ theme }) => theme.color.garkGreen};
  margin: 0 auto 0 auto;
  border: 1px solid ${({ theme }) => theme.color.whiteGreen};
  border-radius: 500px;
  padding: 4px 4px 4px 16px;
  width: 150px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 33px;
    margin-left: 13px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color.whiteGreen};
  }

  &:hover,
  &:focus {
    background-color: #173d33;
    color: #97d28b;
  }
  svg {
    stroke: black;
    fill: none;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const RenewableSection = styled.section`
  padding-top: 200px;
`;

export const RenewableBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    width: 300px;
    font-family: "Oswald-Regular";
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 48px;
      width: 250px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 64px;
      width: 500px;
    }
  }

  p {
    letter-spacing: -0.04em;
    text-align: justify;
  }
`;

export const RenewableDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteGreen};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 43px;

    p {
      width: 342px;
    }
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
    p {
      width: 363px;
    }
  }
`;

export const Address = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.04em;
  ${({ theme }) => theme.color.garkGreen};

  gap: 8px;
  margin: 0 auto 0 auto;

  a {
    text-decoration: none;
    color: inherit;
  }

  li:nth-child(2) {
    display: flex;
    justify-content: space-between;

    p {
      display: none;
    }

    @media screen and (min-width: 768px) {
      width: 342px;

      p {
        display: block;
      }
    }
    @media screen and (min-width: 1280px) {
      width: 363px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }
`;
