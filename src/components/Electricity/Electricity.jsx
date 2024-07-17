import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import {
  DecorDiv,
  ElectricityBox,
  ElectricitySection,
  NumberDiv,
} from "./Electricity.styled";

export const Electricity = () => {
  const [counter, setCounter] = useState(11341478141111);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => (prev += 1));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <ElectricitySection>
      <Container>
        <ElectricityBox>
          <h2>Electricity we produced for all time</h2>
          <DecorDiv></DecorDiv>
          <NumberDiv>
            {counter.toLocaleString("de-DE")} <span>kWh</span>
          </NumberDiv>
        </ElectricityBox>
      </Container>
    </ElectricitySection>
  );
};
