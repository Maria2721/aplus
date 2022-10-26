import "./HomePage.scss";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import FiveSteps from "../../components/FiveSteps/FiveSteps";
import FactoringIs from "../../components/FactoringIs/FactoringIs";
import Interaction from "../../components/Interaction/Interaction";
import Cases from "../../components/Cases/Cases";
import Documents from "../../components/Documents/Documents";
import Contacts from "../../components/Contacts/Contacts";

function HomePage() {
  return (
    <div className="homePage">
      <FirstScreen
        page="home"
        description="Все виды факторинга, все регионы России, получите выгодные условия на факторинг."
        buttonRequest={true}
        buttonCalculate={true}>
        Факторинг для поставщиков <br /> и покупателей
      </FirstScreen>
      <FiveSteps />
      <FactoringIs />
      <Interaction />
      <div className="container">
        <div className="homePage__casesAndDocuments container__row">
          <Cases />
          <Documents />
        </div>
      </div>
      <Contacts />
    </div>
  );
}

export default HomePage;
