import styled from "styled-components";

export const PaginationDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  padding-bottom: 19px;

  @media screen and (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-bottom: 38px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }

  h2 {
    width: 264px;
    font-family: "Oswald-Regular";
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
    grid-column: span 2;

    @media screen and (min-width: 768px) {
      width: 354px;

      grid-column: span 2;
      padding-bottom: 0px;
      padding-right: 50px;
      font-size: 36px;
    }
    @media screen and (min-width: 1280px) {
      width: 450px;
      font-size: 48px;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 100px;
    border: 1px solid #173d33;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      border: 1px solid ${({ theme }) => theme.color.whiteGreen};
    }

    @media screen and (min-width: 1280px) {
      padding: 24px;
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
  }
`;

export const PageDiv = styled.div`
  display: flex;
  align-items: end;
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    padding-left: 8px;
    border-left: 1px solid ${({ theme }) => theme.color.whiteGreen};
  }
  @media screen and (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const TotalSpan = styled.span`
  color: rgba(23, 61, 51, 0.25);
`;
