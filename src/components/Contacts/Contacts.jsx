import './Contacts.scss';
import {ReactComponent as TelIcon } from "../../assets/imgs/tel_icon.svg"
import {ReactComponent as MailIcon } from "../../assets/imgs/mail_icon.svg"


function Contacts(){
  return (
    <div className="container">
      <div className="contacts container__row">
        <h1 className="contacts__header">Контакты</h1>
        <div className="contacts__content">
          <div className="contacts__contacts">
            <div className="contacts__row">
              <h2 className="contacts__subtitle">Центральный офис</h2>
              <div className="contacts__description">350063, Россия, <br className="contacts__desktop_hidden"/>г. Краснодар,<br/>ул. Уральская, д. 75/1</div>
            </div>
            {/* <div className="contacts__row">
              <h2 className="contacts__subtitle">Филиал</h2>
              <div className="contacts__description">Москва, Пресненская набережная, д.12, офис 405, помещение 3</div>
            </div> */}
            <div className="contacts__row">
              <h2 className="contacts__subtitle">Для связи</h2>
              <div className="contacts__telAndMail">
                <div className="contacts__linkAndIcon">
                  <TelIcon className="contacts__iconTel"/> <a href="tel:+74954459099" className="contacts__description">+7 (495) 445-90-99</a>
                </div>
                <div className="contacts__linkAndIcon">
                  <MailIcon className="contacts__iconMail"/><a href="mailto:info@fcaplus.ru" className="contacts__description">info@fcaplus.ru</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contacts__mapWrapper">
            <iframe className="contacts__map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5099045500347!2d37.535223762818404!3d55.749643966130535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdcbbad463d%3A0x6d3294a8edf98cce!2z0JrQvtCy0L7RgNC60LjQvdCzIMKr0J7RhNC40YEgMjQvN8K7!5e0!3m2!1sru!2sge!4v1664996240475!5m2!1sru!2sge" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
