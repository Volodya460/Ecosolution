import styled from "styled-components";

export const ContactSection = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  h2 {
    font-family: "Oswald-Regular";
    font-size: 28px;
    line-height: 100%;
    text-transform: uppercase;

    text-align: center;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 36px;
      margin-bottom: 40px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 48px;
      margin-bottom: 120px;
    }
  }
`;

export const InfoBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
`;

export const ContactBox = styled.div`
  p {
    font-size: 16px;
    letter-spacing: -0.04em;
    text-align: justify;
  }

  a {
    font-size: 20px;
    letter-spacing: -0.04em;
    text-align: justify;

    text-decoration: none;
    color: inherit;

    @media screen and (min-width: 1280px) {
      font-size: 24px;
    }
  }

  svg {
    stroke: black;
    fill: none;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const PhoneList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover svg {
      stroke: ${({ theme }) => theme.color.whiteGreen};
    }
    &:focus svg {
      stroke: ${({ theme }) => theme.color.whiteGreen};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 16px;

    a {
      gap: 12px;
    }
  }
`;

export const EmailBox = styled.div`
  margin-top: 24px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    &:hover svg {
      stroke: ${({ theme }) => theme.color.whiteGreen};
    }
    &:focus svg {
      stroke: ${({ theme }) => theme.color.whiteGreen};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 32px;

    a {
      margin-top: 16px;
    }
  }
`;

export const AddressBox = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 1280px) {
    margin-top: 32px;

    address {
      margin-top: 16px;
    }
  }

  address {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    font-size: 20px;
    letter-spacing: -0.04em;
    text-align: justify;
  }
`;

export const SocialBox = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 1280px) {
    margin-top: 32px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    @media screen and (min-width: 1280px) {
      margin-top: 16px;
    }
  }
  li {
    padding: 12px;

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
  }
`;
