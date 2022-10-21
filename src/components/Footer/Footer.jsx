import './Footer.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { ReactComponent as TelegramIcon } from "../../assets/imgs/telegram_icon.svg";
import { ReactComponent as WatsappIcon } from "../../assets/imgs/watsapp_icon.svg";

function Footer () {
  return (
  <div className="footer container">
     <div className="footer__inner container__row">
        <Link to="/" className="footer__logoWrapper">
          <Logo className="footer__logo" />
        </Link>

        <div className="footer__content">
          <div className="footer__top">
            <div className="footer__pages">
                <div className="footer__casesAndFactoring">
                  <Link to="/cases" className="footer__link">Кейсы</Link>
                  <Link to="/" className="footer__link">Факторинг</Link>
                </div>
                <div className="footer__contactsAndScheme">
                  <Link to="/contacts" className="footer__link">Контакты</Link>
                  <Link to="/scheme" className="footer__link">Схема факторинга</Link>
                </div>
              <Link to="/for-marketplaces" className="footer__link footer__market">Для маркетплейсов</Link>
            </div>
            <div className="footer__telAndSocial">
              <div>
                <a href="tel:+74954459099" className="footer__tel">+7 (495) 445-90-99</a>
              </div>
              <div className="footer__social">
                <a
                    href='https://seahorse-app-uhrp6.ondigitalocean.app/'
                    target="_blank"
                    rel="noreferrer">
                        <TelegramIcon className="footer__icon" />
                  </a>
                  <a
                    href='https://seahorse-app-uhrp6.ondigitalocean.app/'
                    target="_blank"
                    rel="noreferrer">
                        <WatsappIcon className="footer__icon" />
                  </a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
                <div className="footer__agreementAndHelp">
                  <Link to="/" className="footer__link footer__agreement">Соглашение об обработке персональных данных</Link>
                  <button className="footer__link footer__help">Служба поддержки</button>
                </div>
                <div className="footer__description">
                    <div className="footer__text">© 2022 ООО «А+ факторинг».</div>
                    <div className="footer__text">Все права защищены</div>
                </div>
          </div>
        </div>
      </div>
  </div>
  )
};

export default Footer;
