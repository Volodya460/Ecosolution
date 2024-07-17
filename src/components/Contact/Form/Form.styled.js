import styled from "styled-components";
import { Form } from "formik";

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 36px 12px 36px 12px;
  gap: 25px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.background.grey};

  font-size: 16px;
  letter-spacing: -0.04em;
  text-align: justify;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 559px;
    padding: 36px 24px 36px 36px;
    margin-top: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 596px;
    height: 623px;
    padding: 48px 48px 48px 48px;
  }

  label {
    display: flex;
    flex-direction: column;

    p {
      font-weight: 400;
      font-size: 12px;
      letter-spacing: -0.04em;
      text-align: right;
      color: #d28b8b;
      padding-top: 8px;
    }
  }

  input {
    font-size: 18px;
    color: #173d33;
    padding-bottom: 8px;
    margin-top: 8px;
    border: none;
    border-bottom: ${({ errors }) =>
      errors ? "1px solid red" : "1px solid #97d28b"};

    background-color: ${({ theme }) => theme.background.grey};

    &::placeholder {
      color: #bdbdbd;
    }
  }
  textarea {
    width: 100%;
    height: 147px;
    resize: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteGreen};
    background-color: ${({ theme }) => theme.background.grey};
    margin-top: 8px;
    &::placeholder {
      color: #bdbdbd;
    }
  }

  button {
    display: flex;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.color.whiteGreen};
    border-radius: 500px;
    padding: 4px 4px 4px 16px;

    margin-top: 16px;
    margin-left: auto;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #173d33;
      color: #97d28b;
    }

    @media screen and (min-width: 768px) {
      margin-top: 0px;
    }

    svg {
      stroke: black;
      fill: none;
    }

    span {
      display: flex;
      align-items: center;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.color.whiteGreen};
      padding: 8px;
      margin-left: 12px;
    }
  }
`;
