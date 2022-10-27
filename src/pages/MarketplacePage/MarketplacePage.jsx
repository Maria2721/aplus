import "./MarketplacePage.scss";
import TakeAsMuch from "../../components/TakeAsMuch/TakeAsMuch";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import HowReceiveMoney from "../../components/HowReceiveMoney/HowReceiveMoney";

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
    <HowReceiveMoney/>
    <TakeAsMuch />
  </div>
);

export default MarketplacePage;
