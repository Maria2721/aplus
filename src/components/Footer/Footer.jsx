import './Footer.scss';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { ReactComponent as TelegramIcon } from "../../assets/imgs/telegram_icon.svg";
import { ReactComponent as WatsappIcon } from "../../assets/imgs/watsapp_icon.svg";

function Footer({ handleHelpModal }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.style = "";
  }

  return (
    <div className="footer container">
      <div className="footer__inner container__row">
        <Link to="/" onClick={scrollToTop} className="footer__logoWrapper">
          <Logo className="footer__logo" />
        </Link>

        <div className="footer__content">
          <div className="footer__top">
            <div className="footer__pages">
              <div className="footer__casesAndFactoring">
                <Link to="/cases" className="footer__link">Кейсы</Link>
                <HashLink smooth to="/#factoring" className="footer__link">Факторинг</HashLink>
              </div>
              <div className="footer__contactsAndScheme">
                <HashLink smooth to="/#contacts" className="footer__link">Контакты</HashLink>
                <HashLink smooth to="/#scheme" className="footer__link">Схема факторинга</HashLink>
              </div>
              <Link to="/for-marketplaces" className="footer__link footer__market">Для маркетплейсов</Link>
            </div>
            <div className="footer__telAndSocial">
              <div className="footer__tel">
                <a href="tel:+74954459099">+7 (495) 445-90-99</a>
              </div>
              <div className="footer__social">
                <a href="https://telegram.me/74954459099" target="_blank" rel="noreferrer">
                  <TelegramIcon className="footer__icon" />
                </a>
                <a href="https://wa.me/74954459099" target="_blank" rel="noreferrer">
                  <WatsappIcon className="footer__icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__agreementAndHelp">
              <Link to="/agreement" className="footer__link footer__agreement">Соглашение об обработке персональных данных</Link>
              <button className="footer__link footer__help" onClick={handleHelpModal}>Служба поддержки</button>
            </div>
            <div className="footer__description">
              <div className="footer__text">© 2022 ООО «А+ факторинг»</div>
              <div className="footer__text">Все права защищены</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
