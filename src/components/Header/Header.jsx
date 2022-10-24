import "./Header.scss";
import * as cx from "classnames";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { ReactComponent as CalculatorIcon } from "../../assets/imgs/calc_icon.svg";
import { ReactComponent as Burger } from "../../assets/imgs/burger_icon_tablet.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import ButtonRequest from "../ButtonRequest/ButtonRequest";

function Header({ opened, closeBurgerMenu, handleBurger }) {
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
        <nav className={classNav} onClick={closeBurgerMenu}>
          <div className="header__navInner">
            {opened && (
              <button className="header__close" onClick={closeBurgerMenu}>
                <Close className="header__closeIcon" />
              </button>
            )}
            <div className="header__linksAndButtons">
              <div className="header__links" onClick={(e) => e.stopPropagation()}>
                <Link to="/" onClick={closeBurgerMenu} className="header__link">
                  Факторинг
                </Link>
                <Link to="/scheme" onClick={closeBurgerMenu} className="header__link">
                  Схема факторинга
                </Link>
                <Link to="/cases" onClick={closeBurgerMenu} className="header__link">
                  Кейсы
                </Link>
                <Link to="/for-marketplaces" onClick={closeBurgerMenu} className="header__link">
                  Маркетплейсам
                </Link>
                <Link
                  to="/contacts"
                  onClick={closeBurgerMenu}
                  className="header__link header__link_border">
                  Контакты
                </Link>
              </div>
              <div className="header__buttons">
                <ButtonRequest isSmall={true}/>
                <button className="header__calc">
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
