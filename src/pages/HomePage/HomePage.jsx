import "./HomePage.scss";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import FiveSteps from "../../components/FiveSteps/FiveSteps";
import FactoringIs from "../../components/FactoringIs/FactoringIs";
import Interaction from "../../components/Interaction/Interaction";
import CasesWithDocuments from "../../components/CasesWithDocuments/CasesWithDocuments";
import Contacts from "../../components/Contacts/Contacts";

function HomePage({ handleCalculatorModal, handleRequestModal }) {

  return (
    <div className="homePage">
      <FirstScreen
        page="home"
        description="Все виды факторинга, все регионы России, получите выгодные условия на факторинг."
        buttonRequest={true}
        buttonCalculate={true}
        handleCalculatorModal={handleCalculatorModal}
        handleRequestModal={handleRequestModal}>
        Факторинг для поставщиков <br /> и покупателей
      </FirstScreen>
      <FiveSteps
        handleCalculatorModal={handleCalculatorModal}
        handleRequestModal={handleRequestModal} />
      <FactoringIs id="factoring" />
      <Interaction
        id="scheme"
        handleCalculatorModal={handleCalculatorModal}
        handleRequestModal={handleRequestModal} />
      <CasesWithDocuments />
      <Contacts id="contacts" />
    </div>
  );
}

export default HomePage;
