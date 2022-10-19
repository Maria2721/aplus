import './FirstScreen.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import ButtonCalculate from '../ButtonCalculate/ButtonCalculate';

function FirstScreen () {
  return (
    <section className="firstScreen container">
      <div className="firstScreen__inner container__row">
        <h1 className="firstScreen__header">Факторинг для поставщиков <br/> и покупателей</h1>
        <p className="firstScreen__description">Все виды факторинга, все регионы России,<br/>получите выгодные условия на факторинг.</p>
        <div className="firstScreen__buttons">
          <ButtonRequest/>
          <ButtonCalculate/>
        </div>
      </div>
    </section>
  )
};

export default FirstScreen;
