import styled from "styled-components";

export const ElectricitySection = styled.section`
  padding-top: 36px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const ElectricityBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  h2 {
    font-family: "Oswald-Regular";
    font-weight: 400;
    font-size: 28px;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
    width: 286px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
      width: 400px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 48px;
      width: 550px;
    }

    @media screen and (min-width: 1280px) {
      gap: 16px;
    }
  }
`;

export const DecorDiv = styled.div`
  width: 1px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.whiteGreen};

  @media screen and (min-width: 768px) {
    height: 87px;
  }
`;

export const NumberDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: "Oswald-Regular";
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.color.whiteGreen};

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 164px;
  }
  span {
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    text-transform: none;
    color: ${({ theme }) => theme.color.garkGreen};
    margin-left: 8px;

    @media screen and (min-width: 768px) {
      font-size: 28px;
      margin-left: 24px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 48px;
    }
  }
`;
