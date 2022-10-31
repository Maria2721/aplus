import './MarketplacePage.scss';
import TakeAsMuch from "../../components/TakeAsMuch/TakeAsMuch";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import HowReceiveMoney from "../../components/HowReceiveMoney/HowReceiveMoney";
import PersonalContact from '../../components/PersonalContact/PersonalContact';
import Calculator from '../../components/Calculator/Calculator';
import Faq from '../../components/Faq/Faq';
import BannerFactoring from '../../components/BannerFactoring/BannerFactoring';

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
    <div className='marketplacePage__calculator container__row'>
      <Calculator isModal={false}/>
    </div>
    <HowReceiveMoney />
    <TakeAsMuch />
    <PersonalContact />
    <Faq />
    <BannerFactoring />
  </div>
);

export default MarketplacePage;
