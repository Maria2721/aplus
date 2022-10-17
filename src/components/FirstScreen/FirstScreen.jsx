import './FirstScreen.scss';
import Button from '../Button/Button';

function FirstScreen () {
  return (
    <div className="firstScreen container">
      <div className="firstScreen__inner container__row">
        <h1 className="firstScreen__header">Факторинг для поставщиков <br/> и покупателей</h1>
        <p className="firstScreen__description">Все виды факторинга, все регионы России,<br/>получите выгодные условия на факторинг.</p>
        <div className="firstScreen__buttons">
          <Button blank={false}>Отправить заявку</Button>
          <Button blank={true}>Рассчитать стоимость</Button>
        </div>
      </div>
    </div>
  )
};

export default FirstScreen;
