import "./Calculator.scss";
import * as cx from "classnames";
import { useState, useEffect } from "react";
import Range from "../Range/Range";
import Select from "../Select/Select";
import ButtonCalculateModal from "../ButtonCalculateModal/ButtonCalculateModal";

function Calculator({ isModal, handleModal }) {
  const [delivery, setDelivery] = useState(4000000);
  const [financing, setFinancing] = useState(4000000);
  const [payment, setPayment] = useState(40);
  const [responsible, setResponsible] = useState("provider");
  const [typeFactoring, setTypeFactoring] = useState("withRegression");
  const [showSelectResponsible, setShowSelectResponsible] = useState(false);
  const [showSelectTypeFactoring, setShowSelectTypeFactoring] = useState(false);

  const classCalculator = cx("calculator", {
    "calculator_modal": isModal,
  });

  useEffect(() => {
    //console.log(responsible)
  }, [responsible]);

  return (
    <div className={classCalculator}>
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
            <ButtonCalculateModal handleCalculateModal={handleModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;