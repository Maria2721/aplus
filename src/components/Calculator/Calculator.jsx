import './Calculator.scss';
import * as cx from "classnames";
import Range from '../Range/Range';

function Calculator({ page }) {
  const classCalculator = cx("calculator", {
    "calculator_modal": page === "modal",
});

  return (
  <div className={classCalculator}>
    <h1 className='calculator__header'>Калькулятор факторинга</h1>
    <div className='calculator__description'>Получите предварительный расчет и отправьте заявку</div>
    <div className='calculator__main'>

      <div className='calculator__col calculator__col_first'>
        <div className='calculator__cell'>
          <div className='calculator__text calculator__text_highlight'>Объем отгрузки</div>
          <Range/>
        </div>
        <div className='calculator__cell'>
          <div className='calculator__text calculator__text_highlight'>Отсрочка платежа</div>
          <Range/>
        </div>
      </div>

      <div className='calculator__col calculator__col_second'>
        <div className='calculator__cell'>
          <div className='calculator__text calculator__text_highlight'>Периодичность поставки</div>
          <Range/>
        </div>
        <div className='calculator__cell'>
          <div className='calculator__text'>Количество поставок: <span>13</span> штук</div>
          <div className='calculator__text'>Годовая выручка<span>с Факторингом 65 000 000 руб.</span></div>
        </div>
      </div>

      <div className='calculator__col calculator__col_third'>
        <div className='calculator__cell'>
          <div className='calculator__text'>Периодичность поставки 60 дн.</div>
          <div className='calculator__text'>Колличество поставок: 7 шт.</div>
          <div className='calculator__text'>Годовая выручка <span>без Факторинга 35 000 000 руб.</span></div>
        </div>
      </div>
    </div>

    <button className='btn btn_full'>Оставить заявку</button>
  </div>
)};

export default Calculator;
