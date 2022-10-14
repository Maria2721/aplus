import './Header.scss';
import * as cx from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  let [opened, setOpened] = useState(false);

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const handleClick = () => {
    if(opened) {
      setOpened(false)
    }
  }
  return (
    <header className="header container">
    <div className="header__inner container__row">
    <nav className={classNav} onClick={handleClick}>
          <div className="header__links" onClick={e => e.stopPropagation()}>
            <Link to="/" onClick={handleClick} className="header__link">Факторинг</Link>
            <Link to="/scheme" onClick={handleClick} className="header__link">Схема факторинга</Link>
            <Link to="/cases" onClick={handleClick} className="header__link">Кейсы</Link>
            <Link to="/contacts" onClick={handleClick} className="header__link header__link_border">Контакты</Link>
          </div>
        </nav>
    {/* <BurgerBlack onClick={() => setOpened(!opened)} className="header__burger"/> */}
    </div>
  </header>
  )
};

export default Header;
