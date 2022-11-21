import './PersonalContact.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import ChatManager from "../../assets/imgs/chat_manager.jpg";
import ChatManagerRetina from "../../assets/imgs/chat_manager_2x.jpg";
import ChatClient from "../../assets/imgs/chat_client.jpg";
import ChatClientRetina from "../../assets/imgs/chat_client_2x.jpg";

function PersonalContact({ handleRequestModal }) {
  return (
    <div className="personalContact container">
      <div className="personalContact__inner container__row">
        <div className="personalContact__chat">
          <img src={ChatManager} srcSet={`${ChatManagerRetina} 2x`} alt="Менеджер" className="personalContact__chat__manager_img" />
          <div className="personalContact__chat__manager__first">Мария, мы пересмотрели лимит по Вашему покупателю</div>
          <div className="personalContact__chat__manager__second">И увеличили лимит на 10 млн рублей!</div>
          <div className="personalContact__chat__client">Оперативно, спасибо!</div>
          <img src={ChatClient} srcSet={`${ChatClientRetina} 2x`} alt="Менеджер" className="personalContact__chat__client_img" />
        </div>
        <div className="personalContact__info">
          <h1 className="personalContact__info__title">Личный контакт с менеджером</h1>
          <div className="personalContact__info__subtitle">Наши менеджеры отлично разбираются в продукте и обязательно помогут вам!</div>
          <ButtonRequest handleRequestModal={handleRequestModal} />
        </div>
      </div>
    </div>
  )
}

export default PersonalContact;
