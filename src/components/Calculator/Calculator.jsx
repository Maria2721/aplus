import "./Calculator.scss";
import * as cx from "classnames";
import { useState, useEffect } from "react";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Range from "../Range/Range";
import Select from "../Select/Select";
import ButtonCalculateModal from "../ButtonCalculateModal/ButtonCalculateModal";
import ButtonRequestCalculator from "../ButtonRequestCalculator/ButtonRequestCalculator";
import ProgressBar from "../ProgressBar/ProgressBar";
import { calculatedData } from "./calculatedData";

function Calculator({ isModal, handleModal, handleRequestModal }) {
  const [delivery, setDelivery] = useState(4000000);
  const [financing, setFinancing] = useState(4000000);
  const [payment, setPayment] = useState(40);
  const [responsible, setResponsible] = useState("provider");
  const [typeFactoring, setTypeFactoring] = useState("withRegression");
  const [showSelectResponsible, setShowSelectResponsible] = useState(false);
  const [showSelectTypeFactoring, setShowSelectTypeFactoring] = useState(false);

  const [calculation, setCalculation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds 3000
  const { width, height } = useWindowDimensions();

  const classCalculator = cx("calculator", {
    "calculator_modal": isModal,
  });

  useEffect(() => {
    if (loading === true) {
      let loadingTimeout = setTimeout(() => {
        if (loading >= 100) return;
        setProgress(progress + 1);
      }, loadingDuration / 100);

      if (progress === 100) {
        setLoading(false);
      }

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [progress, loading]);

  useEffect(() => {
    //console.log(responsible)
    //setShowSelectResponsible((curr) => !curr);
  }, [responsible]);

  return (
    <div className={classCalculator}>
      {calculation === false ?
        <div className="calculator__inputs">
          <h1 className="calculator__header">Калькулятор факторинга</h1>
          <div className="calculator__description">
            Получите предварительный расчет и отправьте заявку
          </div>
          <div className="calculator__main">
            <div className="calculator__rangesBox">
              <div className="calculator__cell">
                <div className="calculator__text">
                  Сумма поставки
                </div>
                <Range
                  isModal={isModal}
                  handleChange={(e) => setDelivery(e.target.value)}
                  value={delivery}
                  text="₽"
                  min={1000000}
                  max={6000000}
                  step={1000000}
                />
              </div>
              <div className="calculator__cell">
                <div className="calculator__text">
                  Срок оплаты
                </div>
                <Range
                  isModal={isModal}
                  handleChange={(e) => setPayment(e.target.value)}
                  value={payment}
                  text="дн."
                  min={10}
                  max={60}
                  step={10}
                />
              </div>
              <div className="calculator__cell">
                <div className="calculator__text">
                  Сумма финансирования
                </div>
                <Range
                  isModal={isModal}
                  handleChange={(e) => setFinancing(e.target.value)}
                  value={financing}
                  text="₽"
                  min={1000000}
                  max={6000000}
                  step={1000000}
                />
              </div>
            </div>

            <div className="calculator__selectorBox">
              <div className="calculator__selectResponsible">
                <Select
                  isModal={isModal}
                  handleChange={(e) => setResponsible(e.target.value)}
                  value={responsible}
                  firstValue="provider"
                  secondValue="buyer"
                  name="responsible"
                  question="Кто отвечает за оплату?"
                  firstOption="Поставщик"
                  secondOption="Покупатель"
                  showSelect={showSelectResponsible}
                  handleSelect={() => setShowSelectResponsible(!showSelectResponsible)}
                />
              </div>
              <div className="calculator__selectTypeFactoring">
                <Select
                  isModal={isModal}
                  handleChange={(e) => setTypeFactoring(e.target.value)}
                  value={typeFactoring}
                  firstValue="withRegression"
                  secondValue="withoutRegression"
                  name="typeFactoring"
                  question="Вид факторинга"
                  firstOption="С регрессом"
                  secondOption="Без регресса"
                  showSelect={showSelectTypeFactoring}
                  handleSelect={() => setShowSelectTypeFactoring(!showSelectTypeFactoring)}
                />
              </div>
              <div className="calculator__buttonWrapper">
                <ButtonCalculateModal
                  handleCalculationModal={() => setCalculation(true)}
                  handleLoading={() => setLoading(true)} />
              </div>
            </div>
          </div>
        </div>
        : (calculation === true && loading === true) ?
          <div className="calculator__loadingCalculation">
            <ProgressBar progress={progress}
              size={((width < 621) || (height < 501)) ? 105 : 138}
              trackWidth={((width < 621) || (height < 501)) ? 10 : 15}
              indicatorWidth={((width < 621) || (height < 501)) ? 10 : 15} />
            <div className="calculator__loadingText">
              Рассчитываем...
            </div>
          </div> :
          <div className="calculator__outputs">
            <h1 className="calculator__header">Калькулятор факторинга</h1>
            <div className="calculator__description">
              Получите предварительный расчет и отправьте заявку
            </div>
            <div className="calculator__mainResults">
              {calculatedData.map((item) => (
                <div key={item.id} id={item.id} className="calculator__mainResultsBox">
                  <div className="calculator__mainResultsLabel">{item.label}</div>
                  <div className="calculator__mainResultsValue">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="calculator__outputsButtonWrapper">
              <ButtonRequestCalculator handleModal={handleModal} handleRequestModal={handleRequestModal} />
            </div>
          </div>
      }
    </div>
  );
}

export default Calculator;