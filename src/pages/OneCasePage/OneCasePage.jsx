import './OneCasePage.scss';
import * as cx from "classnames";
import { cases } from './cases';
import BannerFactoring from '../../components/BannerFactoring/BannerFactoring';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import fruitdelivery from '../../assets/imgs/fruit-delivery.jpg';
import seafooddelivery from '../../assets/imgs/seafood-delivery.jpg';
import softwaredevelopment from '../../assets/imgs/software-development.jpg';
import itoutsourcing from '../../assets/imgs/it-outsourcing.jpg';

import fruitdeliveryTablet from '../../assets/imgs/fruit-delivery-tablet.jpg';
import seafooddeliveryTablet from '../../assets/imgs/seafood-delivery-tablet.jpg';
import softwaredevelopmentTablet from '../../assets/imgs/software-development-tablet.jpg';
import itoutsourcingTablet from '../../assets/imgs/it-outsourcing-tablet.jpg';

import fruitdeliveryMobile from '../../assets/imgs/fruit-delivery-mobile.jpg';
import seafooddeliveryMobile from '../../assets/imgs/seafood-delivery-mobile.jpg';
import softwaredevelopmentMobile from '../../assets/imgs/software-development-mobile.jpg';
import itoutsourcingMobile from '../../assets/imgs/it-outsourcing-mobile.jpg';

function OneCasePage(props) {
  const currentCase = cases.find((item) => (item.id === props.case));
  const { width } = useWindowDimensions();

  const renderImg = () => {
    if ((width >= 959)) {
      return <img className="main__schemeImg" alt="Схема"
        src={currentCase.id === "fruitdelivery" ? fruitdelivery
          : currentCase.id === "seafooddelivery" ? seafooddelivery
            : currentCase.id === "softwaredevelopment" ? softwaredevelopment
              : itoutsourcing} />;
    } else if ((width < 959) && (width > 480)) {
      return <img className="main__schemeImg" alt="Схема"
        src={currentCase.id === "fruitdelivery" ? fruitdeliveryTablet
          : currentCase.id === "seafooddelivery" ? seafooddeliveryTablet
            : currentCase.id === "softwaredevelopment" ? softwaredevelopmentTablet
              : itoutsourcingTablet} />;
    } else {
      return <img className="main__schemeImg" alt="Схема"
        src={currentCase.id === "fruitdelivery" ? fruitdeliveryMobile
          : currentCase.id === "seafooddelivery" ? seafooddeliveryMobile
            : currentCase.id === "softwaredevelopment" ? softwaredevelopmentMobile
              : itoutsourcingMobile} />;
    }
  }

  return (
    <div className="oneCasePage">
      <div className="container">
        <div className="oneCasePage__inner container__row">
          {currentCase && (
            <div className="oneCasePage__item">
              <h1>{currentCase.title}</h1>
              <div className="oneCasePage__itemSubtitle">{currentCase.subtitle}</div>
              <div className="main">
                <div className="main__scheme" id={currentCase.id}>
                  {renderImg()}
                </div>
                <div className="main__steps">
                  <div>
                    <div className="main__stepsTitle">Проблема:</div>
                    <div className="main__stepsMainText">{currentCase.problem}</div>
                  </div>
                  <div>
                    <div className="main__stepsTitle">Решение: </div>
                    <div className="main__stepsMainText">{currentCase.decision}</div>
                  </div>
                  <div>
                    <div className="main__stepsTitle">Итог:</div>
                    <div className="main__stepsMainText">{currentCase.result}</div>
                  </div>
                </div>
              </div>
              <div className="oneCasePage__itemAccentSubtitle">Преимущества факторинга</div>
              <div className="advantages">
                <div className="advantages__firstContainer">
                  <div className={cx("advantages__firstContainerText", (currentCase.id === "softwaredevelopment" || currentCase.id === "itoutsourcing") && "advantages__containerText")}>
                    {currentCase.firstadvantage}
                  </div>
                </div>
                <div className="advantages__secondContainer">
                  <div className={cx("advantages__secondContainerText", (currentCase.id === "softwaredevelopment" || currentCase.id === "itoutsourcing") && "advantages__containerText")}>
                    {currentCase.secondadvantage}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BannerFactoring handleRequestModal={props.handleRequestModal} />
    </div>
  )
}

export default OneCasePage;
