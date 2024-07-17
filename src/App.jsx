import { AskedQuestion } from "./components/AskedQuestion/AskedQuestion";
import { Case } from "./components/Cases/Case";
import { Contact } from "./components/Contact/Contact";
import { Electricity } from "./components/Electricity/Electricity";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { MainValues } from "./components/About/About";
import { Renewable } from "./components/RenewableEnergy/Renewable";

function App() {
  return (
    <>
      <Header />
      <Renewable />
      <Main />
      <MainValues />
      <Electricity />
      <Case />
      <AskedQuestion />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
