import './FiveSteps.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import ButtonCalculate from '../ButtonCalculate/ButtonCalculate';
import Step from '../Step/Step';

function FiveSteps(){
  return (
  <section className="fiveSteps container">
    <div className="fiveSteps__inner container__row">
      <h1 className="fiveSteps__header">Получите финансирование за 5 шагов</h1>
      <div className="fiveSteps__steps">
        <Step text="Заполните заявку" number="1" highlight={false}/>
        <Step text="Прикрепитe документы" number="2" highlight={true}/>
        <Step text="Свяжитесь с менеджером" number="3" highlight={false}/>
        <Step text="Подпишите договор и уведомление дебитора" number="4" highlight={false}/>
        <Step text="Получите финансирование" number="5" highlight={false}/>
      </div>
      <div className="fiveSteps__buttons">
        <ButtonRequest/>
        <ButtonCalculate/>
      </div>
    </div>
  </section>
)};

export default FiveSteps;
