import "./Header.scss";
import * as cx from "classnames";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { ReactComponent as CalculatorIcon } from "../../assets/imgs/calc_icon.svg";
import { ReactComponent as Burger } from "../../assets/imgs/burger_icon_tablet.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import ButtonRequest from "../ButtonRequest/ButtonRequest";
// import { RemoveScroll } from "react-remove-scroll";

function Header({
  opened,
  closeBurger,
  openBurger,
  handleCalculatorModal,
  handleRequestModal,
}) {
  const [focusIcon, setFocusIcon] = useState(false);
  const logoReference = useRef(null);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (focus === true) {
      logoReference.current.focus();
      setFocus(false);
    }
  }, [focus]);

  const handleFocus = () => {
    setFocus(true);
  };

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const classOverlay = cx("header__overlay", {
    "header__overlay header__overlay_active": opened,
  });

  const classCalcIcon = cx("header__calcIcon", {
    "header__calcIcon_focus": focusIcon,
  });

  return (
    <header className="header container">
      <div className="header__inner container__row">
        <Link to="/" className="header__logo" ref={logoReference}>
          <Logo className="header__logoIcon" />
        </Link>
        <div className={classOverlay}></div>
        <nav className={classNav} onClick={closeBurger}>
          <div
            className="header__navInner"
            onClick={(e) => e.stopPropagation()}>
            {opened && (
              <button className="header__close" onClick={closeBurger}>
                <Close className="header__closeIcon" />
              </button>
            )}
            <div className="header__linksAndButtons">
              <div className="header__links">
                <HashLink smooth to="/#factoring" className="header__link" onClick={() => { closeBurger(); handleFocus(); }}>
                  Факторинг
                </HashLink>
                <HashLink smooth to="/#scheme" className="header__link" onClick={() => { closeBurger(); handleFocus(); }}>
                  Схема факторинга
                </HashLink>
                <Link to="/cases" className="header__link" onClick={() => { closeBurger(); handleFocus(); }}>
                  Кейсы
                </Link>
                <Link to="/for-marketplaces" className="header__link" onClick={() => { closeBurger(); handleFocus(); }}>
                  Маркетплейсам
                </Link>
                <HashLink
                  smooth
                  to="/#contacts"
                  className="header__link header__link_border"
                  onClick={() => { closeBurger(); handleFocus(); }}>
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
                  onClick={() => { handleCalculatorModal(); handleFocus(); }}
                  onFocus={() => setFocusIcon((focusIcon) => !focusIcon)}
                  onBlur={() => setFocusIcon((focusIcon) => !focusIcon)}>
                  {opened ? (
                    "Калькулятор"
                  ) : (
                    <CalculatorIcon className={classCalcIcon} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
        <button className="header__burger" onClick={openBurger}>
          <Burger className="header__burgerIcon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
