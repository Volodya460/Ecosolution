import styled from "styled-components";

export const MainSection = styled.section`
  padding-top: 36px;
`;
export const MainH2 = styled.h2`
  width: 250px;
  font-family: "Oswald-Regular";
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 230px;
    font-size: 36px;
    padding-right: 80px;
    flex-basis: calc(100% / 2);
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    padding-right: 254px;
  }
`;
export const Text = styled.p`
  letter-spacing: -0.04em;
  text-align: justify;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 342px;
    flex-basis: calc(100% / 2);
    padding-left: 11px;
    border-left: 1px solid ${({ theme }) => theme.color.whiteGreen};
  }

  @media screen and (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const ImageDiv = styled.div`
  padding-bottom: 36px;

  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
    img {
      height: 348px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
    img {
      height: 524px;
    }
  }
`;

export const TextDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
