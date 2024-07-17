import styled from "styled-components";

export const InfoBox = styled.div`
  padding: 24px 12px 12px 12px;
  background: ${({ theme }) => theme.background.grey};

  @media screen and (min-width: 1280px) {
    padding: 36px 48px 36px 48px;
  }
`;
export const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteGreen};

  @media screen and (min-width: 1280px) {
    padding-bottom: 36px;
  }

  button {
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.whiteGreen};

    svg {
      stroke: black;
      fill: none;
    }
  }
`;

export const TextLocationDiv = styled.div`
  width: 250px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
    width: 250px;
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 370px;
    font-size: 24px;
  }
`;

export const DateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;

  font-size: 12px;
  letter-spacing: -0.04em;
  text-align: justify;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    padding-top: 24px;
  }
`;
