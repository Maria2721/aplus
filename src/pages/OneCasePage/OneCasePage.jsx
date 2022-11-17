import './OneCasePage.scss';
import { cases } from './cases';
import BannerFactoring from '../../components/BannerFactoring/BannerFactoring';

import fruitdelivery from '../../assets/imgs/fruit-delivery.jpg';
import seafooddelivery from '../../assets/imgs/seafood-delivery.jpg';
import softwaredevelopment from '../../assets/imgs/software-development.jpg';
import itoutsourcing from '../../assets/imgs/it-outsourcing.jpg';

function OneCasePage(props) {
  const currentCase = cases.find((item) => (item.id === props.case));

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
                  <img className="main__schemeImg" alt="Схема"
                    src={currentCase.id === "fruitdelivery" ? fruitdelivery
                      : currentCase.id === "seafooddelivery" ? seafooddelivery
                        : currentCase.id === "softwaredevelopment" ? softwaredevelopment
                          : itoutsourcing} />
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
                  <div className="advantages__firstContainerText">{currentCase.firstadvantage}</div>
                </div>
                <div className="advantages__secondContainer">
                  <div className="advantages__secondContainerText">{currentCase.secondadvantage}</div>
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
