import "./Header.scss";
import * as cx from "classnames";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { ReactComponent as CalculatorIcon } from "../../assets/imgs/calc_icon.svg";
import { ReactComponent as Burger } from "../../assets/imgs/burger_icon_tablet.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import ButtonRequest from "../ButtonRequest/ButtonRequest";

function Header({
  opened,
  handleBurger,
  handleCalculatorModal,
  handleRequestModal,
}) {
  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const classOverlay = cx("header__overlay", {
    "header__overlay header__overlay_active": opened,
  });

  return (
    <header className="header container">
      <div className="header__inner container__row">
        <Link to="/" className="header__logo">
          <Logo className="header__logoIcon" />
        </Link>
        <div className={classOverlay}></div>
        <nav className={classNav} onClick={handleBurger}>
          <div
            className="header__navInner"
            onClick={(e) => e.stopPropagation()}>
            {opened && (
              <button className="header__close" onClick={handleBurger}>
                <Close className="header__closeIcon" />
              </button>
            )}
            <div className="header__linksAndButtons">
              <div className="header__links">
                <HashLink smooth to="/#factoring" className="header__link">
                  Факторинг
                </HashLink>
                <HashLink smooth to="/#scheme" className="header__link">
                  Схема факторинга
                </HashLink>
                <Link to="/cases" className="header__link">
                  Кейсы
                </Link>
                <Link to="/for-marketplaces" className="header__link">
                  Маркетплейсам
                </Link>
                <HashLink
                  smooth
                  to="/#contacts"
                  className="header__link header__link_border">
                  Контакты
                </HashLink>
              </div>
              <div className="header__buttons">
                <ButtonRequest
                  size="small"
                  handleRequestModal={handleRequestModal}
                />
                <button
                  className="header__calc"
                  onClick={handleCalculatorModal}>
                  {opened ? (
                    "Калькулятор"
                  ) : (
                    <CalculatorIcon className="header__calcIcon" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
        <button className="header__burger" onClick={handleBurger}>
          <Burger className="header__burgerIcon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
