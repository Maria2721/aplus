import "./Calculator.scss";
import * as cx from "classnames";
import { useState } from "react";
import Range from "../Range/Range";
import ButtonRequest from '../ButtonRequest/ButtonRequest';

function Calculator({ isModal }) {
  const [volume, setVolume] = useState(4000000);
  const [frequency, setFrequency] = useState(30);
  const [deferral, setDeferral] = useState(50);

  const classCalculator = cx("calculator", {
    "calculator_modal": isModal,
  });

  return (
    <div className={classCalculator}>
      <h1 className="calculator__header">Калькулятор факторинга</h1>
      <div className="calculator__description">
        Получите предварительный расчет и отправьте заявку
      </div>
      <div className="calculator__main">
        <div className="calculator__col calculator__col_first">
          <div className="calculator__cell">
            <div className="calculator__text calculator__text_highlight">
              Объем отгрузки
            </div>
            <Range
              isModal={isModal}
              handleChange={(e) => setVolume(e.target.value)}
              value={volume}
              text="₽"
              min={1000000}
              max={6000000}
              step={1000000}
            />
          </div>
          <div className="calculator__cell">
            <div className="calculator__text calculator__text_highlight">
              Отсрочка платежа
            </div>
            <Range
             isModal={isModal}
              handleChange={(e) => setDeferral(e.target.value)}
              value={deferral}
              text="дн."
              min={10}
              max={70}
              step={10}
            />
          </div>
        </div>

        <div className="calculator__col calculator__col_second">
          <div className="calculator__cell">
            <div className="calculator__text calculator__text_highlight">
              Периодичность поставки
            </div>
            <Range
            isModal={isModal}
              handleChange={(e) => setFrequency(e.target.value)}
              value={frequency}
              text="дн."
              min={10}
              max={50}
              step={10}
            />
          </div>
          <div className="calculator__cell">
            <div className="calculator__text">
              Количество поставок:{" "}
              <span className="calculator__text_bold">13</span> штук
            </div>
            <div className="calculator__text">
              Годовая выручка
              <span className="calculator__text_bold">
                <br />с Факторингом 65 000 000 руб.
              </span>
            </div>
          </div>
        </div>

        <div className="calculator__col calculator__col_third">
          <div className="calculator__cell">
            <div className="calculator__text">
              Периодичность поставки 60 дн.
            </div>
            <div className="calculator__text">
              Колличество поставок:{" "}
              <span className="calculator__text_bold">7</span> шт.
            </div>
            <div className="calculator__text">
              Годовая выручка{" "}
              <span className="calculator__text_bold">
                <br />
                без Факторинга 35 000 000 руб.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="calculator__buttonWrapper">
      <ButtonRequest/>
        {/* <button className="btn btn_full">Отправить заявку</button> */}
        </div>
    </div>
  );
}

export default Calculator;