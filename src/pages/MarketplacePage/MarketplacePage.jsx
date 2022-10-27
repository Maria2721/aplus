import './MarketplacePage.scss';
import TakeAsMuch from "../../components/TakeAsMuch/TakeAsMuch";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import HowReceiveMoney from "../../components/HowReceiveMoney/HowReceiveMoney";
import PersonalContact from '../../components/PersonalContact/PersonalContact';
import Faq from '../../components/Faq/Faq';

const MarketplacePage = () => (
  <div className="marketplacePage">
    <FirstScreen
      page="market"
      description="Получайте финансирование и развивайте бизнес на Wildberries, Ozon и других площадках"
      buttonRequest={true}
      buttonCalculate={false}>
      Деньги <br />
      на развитие бизнеса <br />
      на маркетплейсах
    </FirstScreen>
    <HowReceiveMoney />
    <TakeAsMuch />
    <PersonalContact />
    <Faq />
  </div>
);

export default MarketplacePage;
