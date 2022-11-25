import './Contacts.scss';
import {ReactComponent as TelIcon } from "../../assets/imgs/tel_icon.svg"
import {ReactComponent as MailIcon } from "../../assets/imgs/mail_icon.svg"


function Contacts({ id }){
  return (
    <div className="container" id={id}>
      <div className="contacts container__row">
        <h1 className="contacts__header">Контакты</h1>
        <div className="contacts__content">
          <div className="contacts__contacts">
            <div className="contacts__row">
              <h2 className="contacts__subtitle">Центральный офис</h2>
              <div className="contacts__description">350063, Россия, <br className="contacts__desktop_hidden"/>г. Краснодар,<br/>ул. Уральская, д. 75/1</div>
            </div>
            <div className="contacts__row">
              <h2 className="contacts__subtitle">Для связи</h2>
              <div className="contacts__telAndMail">
                <div className="contacts__linkAndIcon">
                  <TelIcon className="contacts__icon contacts__iconTel"/> <a href="tel:+74954459099" className="contacts__description">+7 (495) 445-90-99</a>
                </div>
                <div className="contacts__linkAndIcon">
                  <MailIcon className="contacts__icon contacts__iconMail"/><a href="mailto:info@fcaplus.ru" className="contacts__description">info@fcaplus.ru</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contacts__mapWrapper">
          <iframe className="contacts__map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.6204862181958!2d39.044901415472644!3d45.03262907909825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f05aac19194549%3A0x14a99157224e7e5b!2z0YPQuy4g0KPRgNCw0LvRjNGB0LrQsNGPLCA3NS8xLCDQmtGA0LDRgdC90L7QtNCw0YAsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTAwNTk!5e0!3m2!1sru!2sru!4v1666950323683!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
