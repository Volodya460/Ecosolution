import styled from "styled-components";

export const MainValuesSection = styled.section`
  padding-top: 36px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const MainUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;
export const MainUlItem = styled.li`
  flex-basis: calc(100% / 2 - 12px);
  height: 197px;
  padding: 13px 12px 0px 12px;
  background-color: ${({ theme }) => theme.background.grey};

  h3 {
    display: flex;
    align-items: center;

    font-family: "Oswald-Regular";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;

    padding-bottom: 31px;
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteGreen};

    @media screen and (min-width: 1280px) {
      font-size: 32px;
      padding-bottom: 94px;
    }
  }
  p {
    font-size: 14px;
    letter-spacing: -0.04em;
    text-align: justify;
    margin-top: 13px;

    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

  svg {
    stroke: black;
    fill: none;

    margin-right: 8px;

    @media screen and (min-width: 1280px) {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 100%;
  }

  @media screen and (min-width: 1280px) {
    padding: 48px 24px 0px 24px;
  }
`;

export const MainUlItemImage1 = styled.li`
  display: none;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: block;
    grid-column: span 2;
  }
  @media screen and (min-width: 1280px) {
    img {
      height: 339px;
    }
  }
`;

export const MainUlItemImage2 = styled.li`
  display: none;

  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: block;
    grid-column: span 2;
  }
  @media screen and (min-width: 1280px) {
    img {
      height: 339px;
    }
  }
`;
